import { Bot } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN || "");

bot.command("start", (ctx) => {
  ctx.reply("أهلاً بك يا حيدر في بوت الإدارة والتواصل! 🚀");
});

bot.command("help", (ctx) => {
  ctx.reply("Commands:\n/start – greet\n/help – show this message");
});

bot.callbackQuery("group_info", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply(
    "⚠️ <b>تنبيه:</b>\n" +
    "مجموعات الشكاوي والتواصل مع المرفين <b>قيد التجهيز والتطوير حالياً</b>.\n\n" +
    "يرجى التواصل المباشر مع المالك مؤقتاً عبر زر التواصل المباشر الخاص! ❤️",
    { parse_mode: "HTML" }
  );
});

bot.callbackQuery("discussions", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("⏳ القناة قيد التجهيز! وستكون متاحة قريباً.");
});

// Welcome new members
bot.on("chat_member", (ctx) => {
  // يمكنك إضافة كود الترحيب بالأعضاء هنا
});

bot.start();
