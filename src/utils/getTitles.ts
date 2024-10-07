import { toutiao } from 'src/services';

export async function getTitles() {
  const contents = await toutiao();

  return contents.map((article) => {
    return {
      id: article.item_id,
      title: article.title,
    };
  });
}
