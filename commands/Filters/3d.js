const { EmbedBuilder } = require('discord.js');

module.exports = { 
    config: {
        name: "3d",
        description: "Turning on 3d filter",
        category: "Filters",
        accessableby: "Member",
    },
    run: async (client, message, args, user) => {
        const msg = await message.channel.send(`Loading please wait....`);

            const player = client.manager.get(message.guild.id);
            if(!player) return msg.edit(`No playing in this guild!`);
            const { channel } = message.member.voice;
            if (!channel || message.member.voice.channel !== message.guild.members.me.voice.channel) return msg.edit(`I'm not in the same voice channel as you!`);

            const data = {
                op: 'filters',
                guildId: message.guild.id,
                rotation: { rotationHz: 0.2 }
            }

            await player.node.send(data);

        const embed = new EmbedBuilder()
            .setDescription("`💠` | *Turned on:* `3d`")
            .setColor(client.color);

        await delay(5000);
        msg.edit({ content: " ", embeds: [embed] });
    }
};

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}