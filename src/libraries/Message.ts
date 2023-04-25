import tmi from 'tmi.js'

export enum TypeMessage {
  COMMAND = 'command',
  MESSAGE = 'message',
  SUBSCRIPTION = 'subscription',
  RESUBSCRIPTION = 'resubscription',
  SUBGIFT = 'subgift',
  SUBMYSTERYGIFT = 'submysterygift',
  SUBEXTENDED = 'subextended',
  SUBSCRIBERSONLY = 'subscribersOnly',
  FOLLOWERSONLY = 'followersOnly',
  FOLLOWERSOFF = 'followersOff',
  SLOWMODEON = 'slowmodeOn',
  SLOWMODEOFF = 'slowmodeOff',
  EMOTEONLYON = 'emoteonlyOn',
  EMOTEONLYOFF = 'emoteonlyOff',
  JOIN = 'join',
  PART = 'part',
  HOSTING = 'hosting',
  HOSTED = 'hosted',
  RAID = 'raid',
  RITUAL = 'ritual',
  NOTICE = 'notice',
  CLEARCHAT = 'clearchat',
  CLEARMSG = 'clearmsg',
  ROOMSTATE = 'roomstate',
  USERNOTICE = 'usernotice',
  USERSTATE = 'userstate',
  RECONNECT = 'reconnect',
  DISCONNECTED = 'disconnected',
  CONNECTED = 'connected',
  CHEER = 'cheer',
  BAN = 'ban',
  UNBAN = 'unban',
  MODS = 'mods',
  VIPS = 'vips',
  HOSTTARGET = 'hosttarget',
  NOTICECHANNEL = 'noticeChannel',
}

export interface TextboxMessage extends tmi.ChatUserstate, Textbox {
  type: TypeMessage
  content: string
}

export interface TextboxJoinPart extends Textbox {
  type: TypeMessage
  username: string
}

export interface Textbox {
  [key: string]: any
}
