import { Liveblocks } from "@liveblocks/node";

const key = process.env.LIVEBLOCKS_PRIVATE_KEY;

if (!key) {
  throw new Error("LiveBlocks_private_key is not specified");
}

const liveblocks = new Liveblocks({
  secret: key,
});

export default liveblocks;
