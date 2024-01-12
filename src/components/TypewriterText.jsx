import Typewriter from 'typewriter-effect';

function TypewriterText() {
	return (
		<Typewriter
			onInit={(typewriter) => {
				typewriter
					.pauseFor(300)
					.typeString(`I'm <span class="text-primary">Arturo Avila</span>`)
					.pauseFor(1500)
					.deleteChars(12)
					.typeString(`<span class="text-accent">Full Stack Dev</span>`)
					.pauseFor(1500)
					.deleteChars(14)
					.typeString(`<span class="text-success">Industrial Engineer</span>`)
					.pauseFor(1500)
					.deleteChars(19)
					.typeString(
						`<span class="text-secondary">Electronics Designer</span>`
					)
					.pauseFor(1500)
					.deleteChars(20)
					.typeString(`<span class="text-info">National Gymnast</span>`)
					.pauseFor(1000)
					.start();
			}}
			options={{
				loop: true,
				delay: 40,
				deleteSpeed: 26,
			}}
		/>
	);
}

export default TypewriterText;
