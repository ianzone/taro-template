// https://taro-docs.jd.com/docs/next/apis/network/request/
export async function getArticles() {
  const data = [
    {
      id: 1,
      title: '文章1',
    },
    {
      id: 2,
      title: '文章2',
    },
    {
      id: 3,
      title: '文章3',
    },
  ];
  return data;
}
