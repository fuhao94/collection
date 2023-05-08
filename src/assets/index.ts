interface Food {
  key: number;
  img: string;
  name: string;
  avatar?: string;
  chef?: string;
}

const cdnUrl = 'http://rubh5js51.hn-bkt.clouddn.com/';

const getImgUrl = (name: string, isThumbnail = false) =>
  `${cdnUrl}${name}${isThumbnail ? '?imageView2/0/q/10' : ''}`;

export const foods: Food[] = [
  {
    key: 1,
    img: getImgUrl('food-1.jpg', true),
    name: '凉拌肘子',
  },
  {
    key: 2,
    img: getImgUrl('food-2.jpg'),
    name: '蛋炒饭',
  },
  {
    key: 3,
    img: getImgUrl('food-3.jpg'),
    name: '福鼎肉片',
  },
  {
    key: 4,
    img: getImgUrl('food-4.jpg'),
    name: '番茄土豆肥牛',
  },
  {
    key: 5,
    img: getImgUrl('food-5.jpg'),
    name: '炒泡面',
  },
  {
    key: 6,
    img: getImgUrl('food-6.jpg', true),
    name: '小鸡腿(翅根)炖土豆',
  },
  {
    key: 7,
    img: getImgUrl('food-7.jpg'),
    name: '西葫芦炒鸡蛋',
  },
  {
    key: 8,
    img: getImgUrl('food-8.jpg'),
    name: '排骨炖土豆',
  },
  {
    key: 9,
    img: getImgUrl('food-9.jpg'),
    name: '丝瓜炒蛋',
  },
  {
    key: 10,
    img: getImgUrl('food-10.jpg'),
    name: '白灼虾',
  },
  {
    key: 11,
    img: getImgUrl('food-11.jpg'),
    name: '炒花蛤',
  },
  {
    key: 12,
    img: getImgUrl('food-12.jpg'),
    name: '炒全鸡',
  },
  {
    key: 13,
    img: getImgUrl('food-13.jpg'),
    name: '小里脊炒土豆',
  },
  {
    key: 14,
    img: getImgUrl('food-14.jpg'),
    name: '红烧鸡爪子',
  },
  {
    key: 15,
    img: getImgUrl('food-15.jpg'),
    name: '红烧鸡翅',
  },
  {
    key: 16,
    img: getImgUrl('food-16.jpg'),
    name: '红烧肉',
  },
  {
    key: 17,
    img: getImgUrl('food-17.jpg', true),
    name: '蒜香小龙虾尾',
  },
];
