import axios from 'axios';

type Res = {
  data: {
    content: string;
  }[];
};

export async function getData() {
  const res = await axios.get<Res>('http://is.snssdk.com/api/news/feed/v51/');
  const title = JSON.parse(res.data.data[0].content) as string;
  return title;
}
