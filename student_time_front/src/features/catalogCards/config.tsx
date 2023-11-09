export type Links = {
  id: number;
  title: string;
  path: string;
  SVG: void
}

const SVG1 = () => {
  return (
      <svg viewBox= "0 0 24 24" xmlns = "http://www.w3.org/2000/svg" > <title/><g id="aim">
        < path d = "M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
        <path d="M23,11H22A10,10,0,0,0,13,2.05V1a1,1,0,0,0-2,0v1a10,10,0,0,0-8.95,9H1a1,1,0,0,0,0,2h1a10,10,0,0,0,9,9V23a1,1,0,0,0,2,0V22A10,10,0,0,0,22,13H23A1,1,0,0,0,23,11ZM13,19.93V19a1,1,0,0,0-2,0v.93A8,8,0,0,1,4.07,13H5a1,1,0,0,0,0-2H4.07A8,8,0,0,1,11,4.07V5a1,1,0,0,0,2,0V4.07A8,8,0,0,1,19.93,11H19a1,1,0,0,0,0,2h.93A8,8,0,0,1,13,19.93Z" />
          </g>
      </svg>
  )
}


export const links = {
  1: {
    id: 1,
    title:"goals",
    path: "/goals",
    SVG: () => {
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><g id="aim"><path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/><path d="M23,11H22A10,10,0,0,0,13,2.05V1a1,1,0,0,0-2,0v1a10,10,0,0,0-8.95,9H1a1,1,0,0,0,0,2h1a10,10,0,0,0,9,9V23a1,1,0,0,0,2,0V22A10,10,0,0,0,22,13H23A1,1,0,0,0,23,11ZM13,19.93V19a1,1,0,0,0-2,0v.93A8,8,0,0,1,4.07,13H5a1,1,0,0,0,0-2H4.07A8,8,0,0,1,11,4.07V5a1,1,0,0,0,2,0V4.07A8,8,0,0,1,19.93,11H19a1,1,0,0,0,0,2h.93A8,8,0,0,1,13,19.93Z"/></g></svg>
      )
    }
  },
  2: {
    id: 2,
    title: "calendar",
    path: "/calendar",
    SVG: () => {
      return (
        <svg fill="none" height="75" viewBox="0 0 28 28" width="75" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7.79167 3.47826C7.79167 3.21412 8.0062 3 8.27083 3H9.22917C9.4938 3 9.70833 3.21412 9.70833 3.47826V5.86957H19.2917V3.47826C19.2917 3.21412 19.5062 3 19.7708 3H20.7292C20.9938 3 21.2083 3.21412 21.2083 3.47826V5.86957H24.0833C25.1419 5.86957 26 6.72606 26 7.78261V21C26 19.4019 25.2503 17.9789 24.0833 17.0636V12.5652H4.91667V22.1304C4.91667 22.6587 5.34573 23.087 5.875 23.087H16.455C16.8043 23.8464 17.3383 24.5032 17.9995 25H4.91667C3.85812 25 3 24.1435 3 23.087V7.78261C3 6.72606 3.85812 5.86957 4.91667 5.86957H7.79167V3.47826ZM9.70833 7.78261H19.2917V8.73913C19.2917 9.00327 19.5062 9.21739 19.7708 9.21739H20.7292C20.9938 9.21739 21.2083 9.00327 21.2083 8.73913V7.78261H23.125C23.6543 7.78261 24.0833 8.21086 24.0833 8.73913V10.6522H4.91667V8.73913C4.91667 8.21086 5.34573 7.78261 5.875 7.78261H7.79167V8.73913C7.79167 9.00327 8.0062 9.21739 8.27083 9.21739H9.22917C9.4938 9.21739 9.70833 9.00327 9.70833 8.73913V7.78261Z" fill="black" fill-rule="evenodd" /><path d="M24.0005 25C25.2147 24.0878 26 22.6356 26 21V23.087C26 24.1435 25.1419 25 24.0833 25H24.0005Z" fill="black" /><path clip-rule="evenodd" d="M21 16.75C18.6528 16.75 16.75 18.6528 16.75 21C16.75 23.3472 18.6528 25.25 21 25.25C23.3472 25.25 25.25 23.3472 25.25 21C25.25 18.6528 23.3472 16.75 21 16.75ZM15.25 21C15.25 17.8244 17.8244 15.25 21 15.25C24.1756 15.25 26.75 17.8244 26.75 21C26.75 24.1756 24.1756 26.75 21 26.75C17.8244 26.75 15.25 24.1756 15.25 21Z" fill="black" fill-rule="evenodd" /><path d="M18.5007 20.3792C18.6959 20.184 19.0125 20.184 19.2078 20.3792L20.6216 21.793C20.8168 21.9883 20.8168 22.3049 20.6216 22.5001C20.4263 22.6954 20.1097 22.6954 19.9145 22.5001L18.5007 21.0863C18.3054 20.8911 18.3054 20.5745 18.5007 20.3792Z" fill="black" /><path d="M23.3253 19.0976C23.13 18.9023 22.8135 18.9023 22.6182 19.0976L19.9228 21.793C19.7275 21.9883 19.7275 22.3049 19.9228 22.5001C20.118 22.6954 20.4346 22.6954 20.6299 22.5001L23.3253 19.8047C23.5206 19.6094 23.5206 19.2929 23.3253 19.0976Z" fill="black" /></svg>
      )
    }
  },
  3: {
    id: 3,
    title:"priorities",
    path: "/priorities",
    SVG: () => {
      return (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M118.2 199.9L63.09 261.1l-22.12-22.11c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l40 40C51.53 317.5 57.66 320 63.1 320c.2187 0 .4065 0 .6253-.0156c6.594-.1719 12.81-3.031 17.22-7.922l72-80c8.875-9.859 8.062-25.03-1.781-33.91C142.2 189.3 127.1 190.1 118.2 199.9zM118.2 39.94L63.09 101.1l-22.12-22.11c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l40 40C51.53 157.5 57.66 160 63.1 160c.2187 0 .4065 0 .6253-.0156c6.594-.1719 12.81-3.031 17.22-7.922l72-80c8.875-9.859 8.062-25.03-1.781-33.91C142.2 29.31 127.1 30.09 118.2 39.94zM48 367.1c-26.51 0-48 21.49-48 48c0 26.51 21.49 48 48 48s48-21.49 48-48C96 389.5 74.51 367.1 48 367.1zM256 128h224c17.67 0 32-14.33 32-32s-14.33-32-32-32h-224C238.3 64 224 78.33 224 96S238.3 128 256 128zM480 224h-224C238.3 224 224 238.3 224 256s14.33 32 32 32h224c17.67 0 32-14.33 32-32S497.7 224 480 224zM480 384H192c-17.67 0-32 14.33-32 32s14.33 32 32 32h288c17.67 0 32-14.33 32-32S497.7 384 480 384z"/></svg>
      )
    } },
  4: {
    id: 4,
    title:"library",
    path: "/library",
    SVG: () => {
      return (
        <svg enable-background="new 0 0 64 64" height="75px" id="Layer_1" version="1.1" viewBox="0 0 64 64" width="75px" xmlns="http://www.w3.org/2000/svg"><path d="M62.869,16.842h-0.057c-1.096,0.007-1.266-0.945-1.285-1.387V8.542c0-0.738-0.598-1.336-1.334-1.336H40.428  c-4.959,0-6.809,1.838-7.268,2.415l-0.126,0.175l-0.001,0.003l-0.391,0.536c-0.001,0-0.001,0-0.001,0  c-0.525,0.721-0.982,0.414-1.202,0.178l-0.748-0.933l-0.37-0.446c-0.622-0.653-2.243-1.928-5.456-1.928H3.808  c-0.738,0-1.336,0.598-1.336,1.336v6.825c0,1.195-0.649,1.435-1.047,1.475H1.129c-0.324,0.02-1.078,0.208-1.078,1.595v32.529  c0,0.798,0.647,1.444,1.445,1.444h19.218c6.131,0,8.803,2.312,9.604,3.199l0.457,0.566h0.001c0,0,1.226,1.387,2.518,0l0,0  l0.268-0.314v0.001l0.004-0.003l0.342-0.4c0.01-0.012,0.092-0.104,0.211-0.226c1.023-0.995,3.58-2.823,8.58-2.823h19.805  c0.799,0,1.445-0.646,1.445-1.444V18.122C63.949,16.946,63.098,16.848,62.869,16.842z M58.551,45.862  c0,0.641-0.535,1.158-1.201,1.158H41.055c-5.799,0-7.904,2.62-7.904,2.62l-0.267,0.358l-0.125,0.173c-0.001,0-0.001,0-0.001,0  c-0.553,0.751-1.366,0.006-1.37,0.002l-0.375-0.469c-0.278-0.334-2.408-2.685-7.563-2.685h-16.8c-0.663,0-1.199-0.518-1.199-1.158  V11.199c0-0.64,0.536-1.158,1.199-1.158h13.043c9.702,0,10.621,5.511,10.684,7.112v24.106c0,1.752,0.835,2.081,1.306,2.129h0.701  c0.48-0.048,1.243-0.333,1.243-1.7V16.842h-0.008c0.072-2.005,0.854-6.802,6.689-6.802H57.35c0.666,0,1.201,0.518,1.201,1.158  V45.862z" fill="#241F20"/></svg>
      )
    }
    },
};

export const linksList = Object.values(links);