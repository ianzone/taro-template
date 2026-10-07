import Taro from 'virtual:taro/api';

type Res = {
  data: {
    content: string;
  }[];
};

export async function getData() {
  const res = await Taro.request<Res>({
    url: 'http://is.snssdk.com/api/news/feed/v51/',
  });
  const content = res.data.data[0].content;
  const text = (JSON.parse(content) as { abstract: string }).abstract;
  console.log(text);
  return text;
}
