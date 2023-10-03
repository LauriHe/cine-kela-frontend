import { confetti } from 'tsparticles-confetti';

function ParticleTest() {
  const renderConfetti = async () => {
    const duration = 2 * 1000,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.5), y: Math.random() - 0.5 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.5, 0.9), y: Math.random() - 0.5 },
        })
      );
    }, 250);
  };

  return (
    <div className="h-full w-full flex items-center justify-center" onClick={renderConfetti}>
      <div className="w-[20rem] h-[20rem] bg-gray-800 flex items-center justify-center">
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas arcu et aliquet tincidunt. Duis bibendum lobortis cursus. Nam id
          magna nibh. Vestibulum non erat vitae enim vestibulum molestie nec in est. Nunc ullamcorper erat luctus urna blandit, sit amet imperdiet
          mauris vehicula. Phasellus facilisis bibendum dignissim. Pellentesque condimentum dui vel mi tristique porta.
        </p>
      </div>
    </div>
  );
}

export default ParticleTest;
