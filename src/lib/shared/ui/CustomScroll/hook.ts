import { RefObject, useEffect, useRef, useState, MutableRefObject} from "react";

type UseScrollSetupReturnType<T extends HTMLElement, S extends HTMLElement> = [
  RefObject<T>,
  RefObject<S>,
  number,
  S | null,
  (delta: number) => void,
  (space: number) => void
];

export function useScrollSetup<T extends HTMLElement, S extends HTMLElement>(): UseScrollSetupReturnType<T, S> {
  const ancestorRef = useRef<T>(null);
  const childrenRef = useRef<S>(null);
  const [translateX, setTranslateX] = useState(0);
  const scrollFactor = useRef(0);
  const [childrenRefReactive, setChildrenRefReactive] =
    useState<S | null>(null);

  const handleTranslateXChange = (delta: number) => {
    setTranslateX(-delta * scrollFactor.current);
  };

  const setScrollSpace = (space: number) => {
    if (childrenRef.current && ancestorRef.current) {
      const childrenWidth = childrenRef.current.getBoundingClientRect().width;
      const ancestorWidth = ancestorRef.current.getBoundingClientRect().width;
      scrollFactor.current = (childrenWidth - ancestorWidth) / space;
    }
  };

  useEffect(() => {
    const children = childrenRef.current;
    if (children) {
      setChildrenRefReactive(children);
    }
  });
    
  return [ancestorRef, childrenRef, translateX, childrenRefReactive, handleTranslateXChange, setScrollSpace]
}
