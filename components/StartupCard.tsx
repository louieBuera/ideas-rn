import { Author, Startup } from "@/assets/types";


export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

export default function StartupCard({
  post
}: { post: StartupTypeCard }) {
  const {
    _id, _createdAt, views,
    author,
    title, image, description, category
  } = post;
}