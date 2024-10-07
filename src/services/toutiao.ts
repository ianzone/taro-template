import Taro from '@tarojs/taro';

type ToutiaoRes = {
  data: { content: string }[];
};

type ContentType = {
  item_id: string;
  title: string;
  abstract: string;
};

export async function toutiao() {
  const { data } = await Taro.request<ToutiaoRes>({
    url: 'http://is.snssdk.com/api/news/feed/v51/',
  });
  return data.data.map((item) => {
    return JSON.parse(item.content) as ContentType;
  });
}
