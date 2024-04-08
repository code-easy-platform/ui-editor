import { useEffect } from 'react';
import { useFrame } from 'react-frame-component';


interface IContentFrameProps {
  children: React.ReactNode;
  onRef: (document: Document) => void;
  onScroll: (y: number, x: number) => void;
  onKeyDown: (event: KeyboardEvent) => void;
}
export const ContentFrame: React.FC<IContentFrameProps> = ({ children, onScroll, onRef }) => {
  const { document } = useFrame();


  useEffect(() => {
    if (!document) return;

    onRef(document);
  }, [onRef, document]);

  useEffect(() => {
    if (!document) return;

    document.onscroll = (e: any) => onScroll(e.target.documentElement.scrollTop, e.target.documentElement.scrollLeft);
  }, [document, onScroll]);


  return children;
};
