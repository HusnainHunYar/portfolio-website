import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

jest.mock('framer-motion', () => {
  const React = jest.requireActual('react');

  const createMockMotionComponent = (tag) => {
    const MockComponent = ({ children, ...props }) => {
      return React.createElement(tag, props, children);
    };
    MockComponent.displayName = `Mock${tag.charAt(0).toUpperCase() + tag.slice(1)}`;
    return MockComponent;
  };

  return {
    motion: {
      div: createMockMotionComponent('div'),
      button: createMockMotionComponent('button'),
      section: createMockMotionComponent('section'),
      h1: createMockMotionComponent('h1'),
      h2: createMockMotionComponent('h2'),
      p: createMockMotionComponent('p'),
      a: createMockMotionComponent('a'),
    },
    AnimatePresence: ({ children }) => children,
    useMotionValue: () => ({ set: jest.fn(), get: jest.fn() }),
    useSpring: () => ({ set: jest.fn(), get: jest.fn() }),
    useTransform: () => ({ set: jest.fn(), get: jest.fn() }),
    useInView: () => true,
  };
});

jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div data-testid="canvas">{children}</div>,
  useFrame: jest.fn(),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
