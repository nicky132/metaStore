//billboardTextures
let billboardTextures = {}
billboardTextures.terpSolutionsTexture = '../src/jsm/terpSolutions.png'
billboardTextures.bagHolderBetsTexture =
	'../src/jsm/Bagholdersbetsbillboard.png'
billboardTextures.homeSweetHomeTexture =
	'../src/jsm/home-sweet-home-portrait.png'

//box textures
let boxTexture = {}
boxTexture.Github = '../src/jsm/githubLogo.png'
boxTexture.twitter = '../src/jsm/twitter.png'
boxTexture.LinkedIn = '../src/jsm/linkedInLogo.png'
boxTexture.mail = '../src/jsm/envelope.png'
boxTexture.globe = '../src/jsm/thunder.png'
boxTexture.reactIcon = '../src/jsm/react.png'
boxTexture.allSkills = '../src/jsm/allSkills.png'
boxTexture.lensFlareMain = '../src/jsm/lensflare0.png'
boxTexture.skrillex = '../src/jsm/skrillex.png'
boxTexture.edmText = '../src/jsm/EDM.png'
boxTexture.writing = '../src/jsm/writing.png'
boxTexture.c1 = '../src/jsm/c1.png'

// 获取蔬菜
const boxCTexture = [
	{
		name: '大白菜',
		price: '5元 / 500g',
		img: '../src/jsm/c/c1.png',
	},
	{
		name: '油麦菜',
		price: '5元 / 500g',
		img: '../src/jsm/c/c2.png',
	},
	{
		name: '土豆',
		price: '4元 / 500g',
		img: '../src/jsm/c/c3.png',
	},
	{
		name: '小白菜',
		price: '3元 / 500g',
		img: '../src/jsm/c/c4.png',
	},
	{
		name: '四季豆',
		price: '7元 / 500g',
		img: '../src/jsm/c/c5.png',
	},
	{
		name: '秋葵',
		price: '7元 / 500g',
		img: '../src/jsm/c/c6.png',
	},
	{
		name: '西红柿',
		price: '5元 / 500g',
		img: '../src/jsm/c/c7.png',
	},
	{
		name: '红萝卜',
		price: '3元 / 500g',
		img: '../src/jsm/c/c8.png',
	},
	{
		name: '青瓜',
		price: '3元 / 500g',
		img: '../src/jsm/c/c9.png',
	},
	{
		name: '红番薯',
		price: '6元 / 500g',
		img: '../src/jsm/c/c10.jpg',
	},
	{
		name: '苦瓜',
		price: '8元 / 500g',
		img: '../src/jsm/c/c11.jpg',
	},
	{
		name: '辣椒',
		price: '1.5元 / 500g',
		img: '../src/jsm/c/c12.jpg',
	},
	{
		name: '西兰花',
		price: '4.5元 / 500g',
		img: '../src/jsm/c/c13.png',
	},
	{
		name: '紫包菜',
		price: '3.5元 / 500g',
		img: '../src/jsm/c/c14.jpg',
	},
	{
		name: '金不换',
		price: '4.5元 / 500g',
		img: '../src/jsm/c/c15.png',
	},
	{
		name: '马蹄',
		price: '3元 / 500g',
		img: '../src/jsm/c/c16.png',
	},
]

// 获取蔬菜
const boxCTexturer = [
	{
		name: '五花肉',
		price: '15元 / 500g',
		img: '../src/jsm/r/r1.jpg',
	},
	{
		name: '梅头肉',
		price: '25元 / 500g',
		img: '../src/jsm/r/r2.jpg',
	},
	{
		name: '梅头上肉',
		price: '28元 / 500g',
		img: '../src/jsm/r/r3.jpg',
	},
	{
		name: '黄牛肉',
		price: '33元 / 500g',
		img: '../src/jsm/r/r4.jpg',
	},
	{
		name: '排骨',
		price: '27元 / 500g',
		img: '../src/jsm/r/r5.jpg',
	},
	{
		name: '扇骨',
		price: '17元 / 500g',
		img: '../src/jsm/r/r6.jpg',
	},
	{
		name: '龙骨',
		price: '25元 / 500g',
		img: '../src/jsm/r/r7.jpg',
	},
	{
		name: '黄花鱼',
		price: '23元 / 500g',
		img: '../src/jsm/r/r8.jpg',
	},
	{
		name: '鲫鱼',
		price: '13元 / 500g',
		img: '../src/jsm/r/r9.jpg',
	},
	{
		name: '鲈鱼',
		price: '26元 / 500g',
		img: '../src/jsm/r/r10.jpg',
	},
	{
		name: '鸡蛋',
		price: '15元 / 500g',
		img: '../src/jsm/r/r11.jpg',
	},
	{
		name: '鸡蛋',
		price: '18元 / 500g',
		img: '../src/jsm/r/r11.jpg',
	},
	{
		name: '土鸭',
		price: '35元 / 500g',
		img: '../src/jsm/r/r12.jpg',
	},
	{
		name: '家鸭',
		price: '35元 / 500g',
		img: '../src/jsm/r/r13.jpg',
	},
	{
		name: '土鸡',
		price: '35元 / 500g',
		img: '../src/jsm/r/r13.jpg',
	},
	{
		name: '走地鸡',
		price: '45元 / 500g',
		img: '../src/jsm/r/r14.jpg',
	},
]

//material textures
let stoneTexture = '../src/jsm/stone.png'
let woodTexture = '../src/jsm/woodTexture.jpg'

//text
let inputText = {}
inputText.terpSolutionsText = '../src/jsm/terp-solutions-text.png'
inputText.activities = '../src/jsm/activities_text.png'
inputText.bagholderBetsText = '../src/jsm/bagholderbets-text.png'
inputText.homeSweetHomeText = '../src/jsm/home-sweet-home-text.png'
inputText.staticPortfolio = '../src/jsm/static-portfolio.png'

//SVG
let SVG = {}
SVG.reactLogo = '../src/jsm/react-svg.svg'

//URLs
let URL = {}
URL.terpsolutions = 'https://www.qdama.com/index.html#/'
URL.bagholderBets = 'https://www.qdama.com/index.html#/'
URL.homeSweetHomeURL = 'https://www.qdama.com/index.html#/'
URL.gitHub = 'https://www.qdama.com/index.html#/'
URL.twitter = 'https://www.qdama.com/index.html#/'
URL.email = 'https://www.qdama.com/index.html#/'
URL.githubBagholder = 'https://www.qdama.com/index.html#/'
URL.githubHomeSweetHome = 'https://www.qdama.com/index.html#/'
URL.devTo = 'https://www.qdama.com/index.html#/'

export {
	billboardTextures,
	boxTexture,
	inputText,
	URL,
	stoneTexture,
	woodTexture,
	boxCTexture,
	boxCTexturer,
}
