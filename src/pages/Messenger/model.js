import { createEffect, createStore, createEvent, forward, guard } from 'effector'
import { sendMessage } from '../../api/chat';
import { fileToBase64 } from '../../lib/file-to-base64';
import { timeToHumanReadable } from '../../lib/time-to-readable';
import { v4 as uuidv4 } from 'uuid';

export const fileToBase64Fx = createEffect(fileToBase64);
export const sendMessageFx = createEffect(sendMessage)
export const isFilled = createEvent()
export const send = createEvent();

export const $messages = createStore([])
  .on(sendMessageFx, (state, msg) => (
    [...state, { status: 'sending', ...msg }]
  ))
  .on(sendMessageFx.done, (state, { params, result }) => (
    state.map(msg => (
      msg.uuid === params.uuid ? { ...result, time: timeToHumanReadable(result.time) } : msg
    ))
  ))

guard({
  source: send,
  filter: ({ text }) => Boolean(text),
  target: isFilled,
})

forward({
  from: fileToBase64Fx.doneData.map(result => ({
    base64URL: result,
    uuid: uuidv4()
  })),
  to: sendMessageFx
})

forward({
  from: isFilled.map(data => ({
    ...data,
    uuid: uuidv4()
  })),
  to: sendMessageFx
})







