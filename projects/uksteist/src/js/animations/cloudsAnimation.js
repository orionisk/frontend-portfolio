import { animate } from 'motion';

export const initCloudsAnimation = () => {
  // inView('.sectors-wrapper', () => {
  animate(
    '.a-cloud.--c0',
    { x: ['-10vw', '120vw'], opacity: [0, 1, 0] },
    { easing: 'linear', duration: 25, repeat: Infinity }
  );
  animate(
    '.a-cloud.--c1',
    { x: ['-10vw', '80vw'], opacity: [0, 1, 0] },
    { easing: 'linear', duration: 35, repeat: Infinity }
  );
  animate(
    '.a-cloud.--c2',
    { x: ['-40vw', '20vw'], opacity: [0, 1, 0] },
    { easing: 'linear', duration: 45, repeat: Infinity, delay: 6 }
  );
  animate(
    '.a-cloud.--c3',
    { x: ['-40vw', '40vw'], opacity: [0, 1, 0] },
    { easing: 'linear', duration: 30, repeat: Infinity }
  );
  animate(
    '.a-cloud.--c4',
    { x: ['10vw', '50vw'], opacity: [0, 1, 0] },
    { easing: 'ease-out', duration: 35, repeat: Infinity }
  );
  animate(
    '.a-cloud.--c5',
    { x: ['40vw', '80vw'], opacity: [0, 1, 0] },
    { easing: 'linear', duration: 30, repeat: Infinity }
  );
  animate(
    '.a-cloud.--c6',
    { x: ['-60vw', '60vw'], opacity: [0, 1, 0] },
    { easing: 'linear', duration: 50, repeat: Infinity }
  );
  animate(
    '.a-cloud.--c7',
    { x: ['-40vw', '45vw'], opacity: [0, 1, 0] },
    { easing: 'ease-out', duration: 40, repeat: Infinity, delay: 2 }
  );
  animate(
    '.a-cloud.--c8',
    { x: ['50vw', '90vw'], opacity: [0, 1, 0] },
    { easing: 'linear', duration: 30, repeat: Infinity }
  );
  // });
};
