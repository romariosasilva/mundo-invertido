import { subscribeToDungeonsAndDragons } from './database/dungeons-and-dragons.js';

const audio = document.getElementById('music');
const txtName = document.getElementById('textName');
const txtEmail = document.getElementById('textEmail');
const txtLevel = document.getElementById('textLevel');
const txtCharacter = document.getElementById('textCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');
const btnSwitchTheme = document.getElementById('btnSwitchTheme');

window.addEventListener('click', () => {
	playAudio(audio);
});

btnSwitchTheme.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme');
	document.body.classList.toggle('light-theme');

	const theme = document.body.classList[0];
	const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg';

	audio.src = `assets/musics/${music}`;
	playAudio(audio);
});

btnSubscribe.addEventListener('click', async () => {
	const subscription = {
		name: txtName.value.trim(),
		email: txtEmail.value.trim(),
		level: txtLevel.value.trim(),
		character: txtCharacter.value.trim()
	}

	const subscriptionId = await subscribeToDungeonsAndDragons(subscription);
});

function playAudio(audio) {
	audio.play();
	audio.volume = 0.2;
}

async function loadData() {
	const subscriptions = await getDungeonsAndDragonsSubscriptions();
}

loadData();