import { RefObject, useEffect, useRef, useState, MutableRefObject} from "react";

type UseScrollSetupReturnType<T extends HTMLElement, S extends HTMLElement> = [
  RefObject<T>,
  RefObject<S>,
  number,
  S | null,
  (delta: number) => void,
  (space: number, direction: 'horizontal' | 'vertical') => void
];

export function useScrollSetup<T extends HTMLElement, S extends HTMLElement>(): UseScrollSetupReturnType<T, S> {
  const ancestorRef = useRef<T>(null);
  const childrenRef = useRef<S>(null);
  const [translate, setTranslate] = useState(0);
  const scrollFactor = useRef(0);
  const [childrenRefReactive, setChildrenRefReactive] =
    useState<S | null>(null);

  const handleTranslateChange = (delta: number) => {
    setTranslate(-delta * scrollFactor.current);
  };

  const setScrollSpace = (space: number, direction: 'horizontal' | 'vertical') => {
    if (childrenRef.current && ancestorRef.current) {
      const childrenLength = childrenRef.current.getBoundingClientRect()[direction === 'horizontal' ? 'width' : 'height'];
      const ancestorLength = ancestorRef.current.getBoundingClientRect()[direction === 'horizontal' ? 'width' : 'height'];
      scrollFactor.current = (childrenLength - ancestorLength) / space;
    }
  };

  useEffect(() => {
    const children = childrenRef.current;
    if (children) {
      setChildrenRefReactive(children);
    }
  });
    
  return [ancestorRef, childrenRef, translate, childrenRefReactive, handleTranslateChange, setScrollSpace]
}
