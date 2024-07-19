import { useState, FC } from "react";
import Section from "../Section";
import { GalleryItem } from "../../pages/Home";
import play from "../../assets/images/play.png";
import zoom from "../../assets/images/zoom.png";
import fechar from "../../assets/images/fechar.png";
import * as S from './styles';

type Props = {
  defaultCover: string;
  name: string;
  items: GalleryItem[];
};

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

const getMediaCover = (item: GalleryItem, defaultCover: string): string => {
  return item.type === 'image' ? item.url : defaultCover;
};

const getMediaIcon = (item: GalleryItem): string => {
  return item.type === 'image' ? zoom : play;
};

const Gallery: FC<Props> = ({ defaultCover, name, items }) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: '',
  });

  const closeModal = () => {
    setModal(prev => ({
      ...prev,
      isVisible: false,
    }));
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => setModal({
                isVisible: true,
                type: media.type,
                url: media.url,
              })}
            >
              <img
                src={getMediaCover(media, defaultCover)}
                alt={`Mídia ${index + 1} do ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={closeModal}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt={`Mídia em alta resolução`} />
          ) : (
            <iframe
              frameBorder={0}
              src={modal.url}
              title={`Vídeo ${name}`}
            />
          )}
        </S.ModalContent>
        <div
          className="overlay"
          onClick={closeModal}
        />
      </S.Modal>
    </>
  );
};

export default Gallery;
