import axios from 'axios';

type Res = {
  data: {
    content: any;
  }[];
};

export async function getData() {
  const res = await axios.get<Res>('http://is.snssdk.com/api/news/feed/v51/');
  const content = res.data.data[0].content;
  const text = JSON.parse(content).abstract;
  console.log(text);
  return text;
}
