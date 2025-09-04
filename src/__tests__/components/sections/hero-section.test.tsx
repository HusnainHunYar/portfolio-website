import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/sections/hero-section';

// Mock the 3D component
jest.mock('@/components/3d/floating-cube', () => ({
  FloatingCube: () => <div data-testid="floating-cube">3D Cube</div>,
}));

describe('HeroSection', () => {
  it('renders hero content correctly', () => {
    render(<HeroSection />);

    expect(screen.getByText('Jane Doe')).toBeDefined();
    expect(screen.getByText('Full-Stack Engineer')).toBeDefined();
    expect(
      screen.getByText(/craft exceptional digital experiences/i)
    ).toBeDefined();
  });

  it('renders call-to-action buttons', () => {
    render(<HeroSection />);

    expect(screen.getByRole('button', { name: /get in touch/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /learn more/i })).toBeDefined();
  });

  it('renders social links', () => {
    render(<HeroSection />);

    const githubLink = screen.getByLabelText('GitHub');
    const linkedinLink = screen.getByLabelText('LinkedIn');
    const emailLink = screen.getByLabelText('Email');

    expect(githubLink).toBeDefined();
    expect(linkedinLink).toBeDefined();
    expect(emailLink).toBeDefined();
  });

  it('renders without crashing', () => {
    const { container } = render(<HeroSection />);
    expect(container).toBeTruthy();
  });
});
