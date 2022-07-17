import draw from 'Images/draw.jpg';
import drawAudio from 'Audio/draw.mp3';
import play from 'Images/play.jpg';
import playAudio from 'Audio/play.mp3';
import run from 'Images/run.jpg';
import runAudio from 'Audio/run.mp3';
import sing from 'Images/sing.jpg';
import singAudio from 'Audio/sing.mp3';
import swim from 'Images/swim.jpg';
import swimAudio from 'Audio/swim.mp3';

const cards = [
  {
    categoryId: 2,
    word: 'run',
    translation: 'бегать',
    image: run,
    audio: runAudio,
  },
  {
    categoryId: 2,
    word: 'draw',
    translation: 'рисовать',
    image: draw,
    audio: drawAudio,
  },
  {
    categoryId: 2,
    word: 'play',
    translation: 'играть',
    image: play,
    audio: playAudio,
  },
  {
    categoryId: 2,
    word: 'sing',
    translation: 'петь',
    image: sing,
    audio: singAudio,
  },
  {
    categoryId: 2,
    word: 'swim',
    translation: 'плавать',
    image: swim,
    audio: swimAudio,
  },
  {
    categoryId: 2,
    word: 'read',
    translation: 'читать',
    image: sing,
    audio: singAudio,
  },
  {
    categoryId: 2,
    word: 'sleep',
    translation: 'спать',
    image: sing,
    audio: singAudio,
  },
  {
    categoryId: 2,
    word: 'dance',
    translation: 'танцевать',
    image: sing,
    audio: singAudio,
  },
  {
    word: 'cat',
    translation: 'кот',
    image: 'img/cat.jpg',
    audioSrc: 'audio/cat.mp3',
  },
  {
    word: 'chick',
    translation: 'цыплёнок',
    image: 'img/chick.jpg',
    audioSrc: 'audio/chick.mp3',
  },
  {
    word: 'chicken',
    translation: 'курица',
    image: 'img/chicken.jpg',
    audioSrc: 'audio/chicken.mp3',
  },
  {
    word: 'dog',
    translation: 'собака',
    image: 'img/dog.jpg',
    audioSrc: 'audio/dog.mp3',
  },
  {
    word: 'horse',
    translation: 'лошадь',
    image: 'img/horse.jpg',
    audioSrc: 'audio/horse.mp3',
  },
  {
    word: 'pig',
    translation: 'свинья',
    image: 'img/pig.jpg',
    audioSrc: 'audio/pig.mp3',
  },
  {
    word: 'rabbit',
    translation: 'кролик',
    image: 'img/rabbit.jpg',
    audioSrc: 'audio/rabbit.mp3',
  },
  {
    word: 'sheep',
    translation: 'овца',
    image: 'img/sheep.jpg',
    audioSrc: 'audio/sheep.mp3',
  },
  {
    word: 'bird',
    translation: 'птица',
    image: 'img/bird.jpg',
    audioSrc: 'audio/bird.mp3',
  },
  {
    word: 'fish',
    translation: 'рыба',
    image: 'img/fish1.jpg',
    audioSrc: 'audio/fish.mp3',
  },
  {
    word: 'frog',
    translation: 'жаба',
    image: 'img/frog.jpg',
    audioSrc: 'audio/frog.mp3',
  },
  {
    word: 'giraffe',
    translation: 'жирафа',
    image: 'img/giraffe.jpg',
    audioSrc: 'audio/giraffe.mp3',
  },
  {
    word: 'lion',
    translation: 'лев',
    image: 'img/lion.jpg',
    audioSrc: 'audio/lion.mp3',
  },
  {
    word: 'mouse',
    translation: 'мышь',
    image: 'img/mouse.jpg',
    audioSrc: 'audio/mouse.mp3',
  },
  {
    word: 'turtle',
    translation: 'черепаха',
    image: 'img/turtle.jpg',
    audioSrc: 'audio/turtle.mp3',
  },
  {
    word: 'dolphin',
    translation: 'дельфин',
    image: 'img/dolphin.jpg',
    audioSrc: 'audio/dolphin.mp3',
  },
  {
    word: 'skirt',
    translation: 'юбка',
    image: 'img/skirt.jpg',
    audioSrc: 'audio/skirt.mp3',
  },
  {
    word: 'pants',
    translation: 'брюки',
    image: 'img/pants.jpg',
    audioSrc: 'audio/pants.mp3',
  },
  {
    word: 'blouse',
    translation: 'блузка',
    image: 'img/blouse.jpg',
    audioSrc: 'audio/blouse.mp3',
  },
  {
    word: 'dress',
    translation: 'платье',
    image: 'img/dress.jpg',
    audioSrc: 'audio/dress.mp3',
  },
  {
    word: 'boot',
    translation: 'ботинок',
    image: 'img/boot.jpg',
    audioSrc: 'audio/boot.mp3',
  },
  {
    word: 'shirt',
    translation: 'рубашка',
    image: 'img/shirt.jpg',
    audioSrc: 'audio/shirt.mp3',
  },
  {
    word: 'coat',
    translation: 'пальто',
    image: 'img/coat.jpg',
    audioSrc: 'audio/coat.mp3',
  },
  {
    word: 'shoe',
    translation: 'туфли',
    image: 'img/shoe.jpg',
    audioSrc: 'audio/shoe.mp3',
  },
  {
    word: 'sad',
    translation: 'грустный',
    image: 'img/sad.jpg',
    audioSrc: 'audio/sad.mp3',
  },
  {
    word: 'angry',
    translation: 'сердитый',
    image: 'img/angry.jpg',
    audioSrc: 'audio/angry.mp3',
  },
  {
    word: 'happy',
    translation: 'счастливый',
    image: 'img/happy.jpg',
    audioSrc: 'audio/happy.mp3',
  },
  {
    word: 'tired',
    translation: 'уставший',
    image: 'img/tired.jpg',
    audioSrc: 'audio/tired.mp3',
  },
  {
    word: 'surprised',
    translation: 'удивлённый',
    image: 'img/surprised.jpg',
    audioSrc: 'audio/surprised.mp3',
  },
  {
    word: 'scared',
    translation: 'испуганный',
    image: 'img/scared.jpg',
    audioSrc: 'audio/scared.mp3',
  },
  {
    word: 'smile',
    translation: 'улыбка',
    image: 'img/smile.jpg',
    audioSrc: 'audio/smile.mp3',
  },
  {
    word: 'laugh',
    translation: 'смех',
    image: 'img/laugh.jpg',
    audioSrc: 'audio/laugh.mp3',
  },
];

export default cards;
