import { action } from "./_generated/server";
import { v } from "convex/values";

export const generateAudioAction = action({
  args: { input: v.string(), b: v.number() },
  handler: (_, args) => {
    // do something with `args.a` and `args.b`

    // optionally return a value
    return "success";
  },
});