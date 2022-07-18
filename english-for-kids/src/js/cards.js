import red from 'Images/1/red.jpg';
import blue from 'Images/1/blue.jpg';
import green from 'Images/1/green.jpg';
import yellow from 'Images/1/yellow.jpg';
import orange from 'Images/1/orange.jpg';
import pink from 'Images/1/pink.jpg';
import purple from 'Images/1/purple.jpg';
import black from 'Images/1/black.jpg';

import draw from 'Images/2/draw.jpg';
import play from 'Images/2/play.jpg';
import run from 'Images/2/run.jpg';
import sing from 'Images/2/sing.jpg';
import swim from 'Images/2/swim.jpg';
import read from 'Images/2/read.jpg';
import sleep from 'Images/2/sleep.jpg';
import dance from 'Images/2/dance.jpg';

import zero from 'Images/7/zero.jpg';
import one from 'Images/7/one.jpg';
import two from 'Images/7/two.jpg';
import three from 'Images/7/three.jpg';
import four from 'Images/7/four.jpg';
import five from 'Images/7/five.jpg';
import six from 'Images/7/six.jpg';
import seven from 'Images/7/seven.jpg';
import eight from 'Images/7/eight.jpg';
import nine from 'Images/7/nine.jpg';

import drawAudio from 'Audio/2/draw.mp3';
import playAudio from 'Audio/2/play.mp3';
import runAudio from 'Audio/2/run.mp3';
import singAudio from 'Audio/2/sing.mp3';
import swimAudio from 'Audio/2/swim.mp3';
import readAudio from 'Audio/2/read.mp3';
import sleepAudio from 'Audio/2/sleep.mp3';
import danceAudio from 'Audio/2/dance.mp3';

import redAudio from 'Audio/1/red.mp3';
import blueAudio from 'Audio/1/blue.mp3';
import greenAudio from 'Audio/1/green.mp3';
import yellowAudio from 'Audio/1/yellow.mp3';
import orangeAudio from 'Audio/1/orange.mp3';
import pinkAudio from 'Audio/1/pink.mp3';
import purpleAudio from 'Audio/1/purple.mp3';
import blackAudio from 'Audio/1/black.mp3';

import zeroAudio from 'Audio/7/zero.mp3';
import oneAudio from 'Audio/7/one.mp3';
import twoAudio from 'Audio/7/two.mp3';
import threeAudio from 'Audio/7/three.mp3';
import fourAudio from 'Audio/7/four.mp3';
import fiveAudio from 'Audio/7/five.mp3';
import sixAudio from 'Audio/7/six.mp3';
import sevenAudio from 'Audio/7/seven.mp3';
import eightAudio from 'Audio/7/eight.mp3';
import nineAudio from 'Audio/7/nine.mp3';

const cards = [
  {
    categoryId: 1,
    word: 'red',
    translation: 'красный',
    image: red,
    audio: redAudio,
  },
  {
    categoryId: 1,
    word: 'blue',
    translation: 'синий',
    image: blue,
    audio: blueAudio,
  },
  {
    categoryId: 1,
    word: 'green',
    translation: 'зеленый',
    image: green,
    audio: greenAudio,
  },
  {
    categoryId: 1,
    word: 'yellow',
    translation: 'желтый',
    image: yellow,
    audio: yellowAudio,
  },
  {
    categoryId: 1,
    word: 'orange',
    translation: 'оранжевый',
    image: orange,
    audio: orangeAudio,
  },
  {
    categoryId: 1,
    word: 'pink',
    translation: 'розовый',
    image: pink,
    audio: pinkAudio,
  },
  {
    categoryId: 1,
    word: 'purple',
    translation: 'фиолетовый',
    image: purple,
    audio: purpleAudio,
  },
  {
    categoryId: 1,
    word: 'black',
    translation: 'черный',
    image: black,
    audio: blackAudio,
  },
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
    image: read,
    audio: readAudio,
  },
  {
    categoryId: 2,
    word: 'sleep',
    translation: 'спать',
    image: sleep,
    audio: sleepAudio,
  },
  {
    categoryId: 2,
    word: 'dance',
    translation: 'танцевать',
    image: dance,
    audio: danceAudio,
  },
  {
    categoryId: 7,
    word: 'zero',
    translation: 'ноль',
    image: zero,
    audio: zeroAudio,
  },
  {
    categoryId: 7,
    word: 'one',
    translation: 'один',
    image: one,
    audio: oneAudio,
  },
  {
    categoryId: 7,
    word: 'two',
    translation: 'два',
    image: two,
    audio: twoAudio,
  },
  {
    categoryId: 7,
    word: 'three',
    translation: 'три',
    image: three,
    audio: threeAudio,
  },
  {
    categoryId: 7,
    word: 'four',
    translation: 'четыре',
    image: four,
    audio: fourAudio,
  },
  {
    categoryId: 7,
    word: 'five',
    translation: 'пять',
    image: five,
    audio: fiveAudio,
  },
  {
    categoryId: 7,
    word: 'six',
    translation: 'шесть',
    image: six,
    audio: sixAudio,
  },
  {
    categoryId: 7,
    word: 'seven',
    translation: 'семь',
    image: seven,
    audio: sevenAudio,
  },
  {
    categoryId: 7,
    word: 'eight',
    translation: 'восемь',
    image: eight,
    audio: eightAudio,
  },
  {
    categoryId: 7,
    word: 'nine',
    translation: 'девять',
    image: nine,
    audio: nineAudio,
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
