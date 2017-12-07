<template>
    <nav class="nav">
        <router-link to="/">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketchjs="https://sketch.io/dtd/" sketchjs:metadata="eyJ0aXRsZSI6IkxvZ29NYWtyIiwiZGVzY3JpcHRpb24iOiJtYWRlIHdpdGggaHR0cDovL2xvZ29tYWtyLmNvbSIsIm1ldGFkYXRhIjp7InVzZXJBZ2VudCI6eyJ1c2VyQWdlbnQiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xM18xKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNjIuMC4zMjAyLjk0IFNhZmFyaS81MzcuMzYiLCJlZGdlIjpmYWxzZSwiZmlyZWZveCI6ZmFsc2UsImllIjpmYWxzZSwib3BlcmEiOmZhbHNlLCJjaHJvbWUiOnRydWUsInNhZmFyaSI6ZmFsc2UsImJsYWNrYmVycnkiOmZhbHNlLCJtYWMiOnRydWUsIndpbmRvd3MiOmZhbHNlLCJsaW51eCI6ZmFsc2UsImFuZHJvaWQiOmZhbHNlLCJpb3MiOmZhbHNlLCJfbW9iaWxlIjpmYWxzZSwiY29yZG92YSI6ZmFsc2UsInBoYW50b20iOmZhbHNlLCJjaHJvbWVBcHAiOmZhbHNlLCJub2RlIjpmYWxzZSwibm9kZXdlYmtpdCI6ZmFsc2UsImxhbmciOiJlbi11cyIsImhpc3RvcnkiOnRydWUsImNob29zZUVudHJ5IjpmYWxzZSwiY2FudmFzIjp0cnVlLCJjc3NCYWNrZ3JvdW5kQmxlbmRNb2RlIjoiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNzc0JhY2tncm91bmRDbGlwIjoiYmFja2dyb3VuZENsaXAiLCJjc3NGaWx0ZXIiOiJmaWx0ZXIiLCJjc3NUZXh0RmlsbENvbG9yIjoid2Via2l0VGV4dEZpbGxDb2xvciIsImNzc1RyYW5zZm9ybSI6InRyYW5zZm9ybSIsImNzc1RyYW5zZm9ybU9yaWdpbiI6InRyYW5zZm9ybU9yaWdpbiIsImN0eF9pbWFnZVNtb290aGluZyI6dHJ1ZSwiY3R4X2xpbmVEYXNoIjp0cnVlLCJjdHhfYmxpcCI6dHJ1ZSwiZ2NvIjp7InNvdXJjZS1vdmVyIjp0cnVlLCJzb3VyY2UtaW4iOnRydWUsInNvdXJjZS1vdXQiOnRydWUsInNvdXJjZS1hdG9wIjp0cnVlLCJkZXN0aW5hdGlvbi1vdmVyIjp0cnVlLCJkZXN0aW5hdGlvbi1pbiI6dHJ1ZSwiZGVzdGluYXRpb24tb3V0Ijp0cnVlLCJkZXN0aW5hdGlvbi1hdG9wIjp0cnVlLCJsaWdodGVyIjp0cnVlLCJjb3B5Ijp0cnVlLCJ4b3IiOnRydWUsIl9fY29tcG9zaXRlIjp0cnVlLCJub3JtYWwiOnRydWUsIm11bHRpcGx5Ijp0cnVlLCJzY3JlZW4iOnRydWUsIm92ZXJsYXkiOnRydWUsImRhcmtlbiI6dHJ1ZSwibGlnaHRlbiI6dHJ1ZSwiY29sb3ItZG9kZ2UiOnRydWUsImNvbG9yLWJ1cm4iOnRydWUsImhhcmQtbGlnaHQiOnRydWUsInNvZnQtbGlnaHQiOnRydWUsImRpZmZlcmVuY2UiOnRydWUsImV4Y2x1c2lvbiI6dHJ1ZSwiaHVlIjp0cnVlLCJzYXR1cmF0aW9uIjp0cnVlLCJjb2xvciI6dHJ1ZSwibHVtaW5vc2l0eSI6dHJ1ZSwiX19ibGVuZCI6dHJ1ZX0sIl9waXhlbFJhdGlvIjoyLCJwaXhlbFJhdGlvIjoyLCJpZGIiOnRydWUsImluY29nbml0byI6ZmFsc2UsImlkYl9ibG9iIjp0cnVlLCJpb19ibG9iIjp0cnVlLCJjbGlwYm9hcmQiOnRydWV9fSwiY2xpcFBhdGgiOnsiZW5hYmxlZCI6dHJ1ZX0sImV4cG9ydERQSSI6NzIsImV4cG9ydEZvcm1hdCI6InBuZyIsImV4cG9ydFF1YWxpdHkiOjAuOTUsInNjYWxlIjoxLCJ1bml0cyI6IiUiLCJ3aWR0aCI6MTAwLCJoZWlnaHQiOjEwMCwicGFnZXMiOnsibGVuZ3RoIjoxLCJkYXRhIjpbeyJ3aWR0aCI6MTAwLCJoZWlnaHQiOjEwMH1dfX0=" width="60.31746031746047" height="114.35665366621737" viewBox="474 126 60.31746031746047 114.35665366621737" sketchjs:version="5.1.37">
                <g sketchjs:tool="clipart" style="mix-blend-mode: source-over;" transform="matrix(1.2968229466925594,0,0,1.2968229466925594,439.3173638376222,118.31904206405943)">
                    <path stroke="#fff410" 
                        d="M68.488 11.969a5.51 5.51 0 0 0-4.14 1.04c-1.2.89-1.98 2.19-2.19 
                        3.62l-3.27 17.21-3.2-10.95 2.36-10.12c.7-2.99-1.17-6-4.17-6.7a5.54 
                        5.54 0 0 0-4.86 1.18c-1.16-.51-2.5-.62-3.8-.24a5.584 5.584 0 0 0-3.77 
                        6.94l2.71 9.21-2.15 9.22-4.26-17.21a5.573 5.573 0 0 0-5.42-4.24c-.45 
                        0-.9.05-1.34.16a5.587 5.587 0 0 0-4.08 6.76l5.05 20.42a8.735 8.735 
                        0 0 0-3.54 7.02v8.37c0 4.14 2.09 7.8 5.26 9.97v12.56c0 3.63 2.95 6.58 
                        6.58 6.58h5.57v1.57a4.883 4.883 0 1 0 3.84 8.42c.89.84 2.07 1.32 3.33 
                        1.32a4.883 4.883 0 1 0 .51-9.74v-1.57h3.36c.33.93 1.07 1.67 2.01 
                        2v1.03c0 1.51 1.23 2.74 2.74 2.74s2.74-1.23 2.74-2.74v-22.17c3.17-2.17 
                        5.26-5.83 5.26-9.97v-15.33c0-.02 
                        0-.04-.01-.06.01-.01 
                        0-.02 0-.02.02-.03.02-.05.03-.08l3.56-19.87c.44-3.04-1.67-5.88-4.71-6.33zm-15.1-3.79c1.84.42 
                        2.98 2.27 2.55 4.1l-1.49 6.38-2.3-7.87c-.25-.86-.69-1.61-1.28-2.22.73-.44 1.63-.6 
                        2.52-.39zm-7.99 19.18l2.72 9.2h-4.87l2.15-9.2zm-16.39-10.03a3.425 3.425 
                        0 0 1 3.32-4.24c1.58 0 2.94 1.07 3.32 2.6l5.17 20.87h-3.67c-1.14 
                        0-2.23.22-3.23.62l-4.91-19.85zm26.68 71.87c0 1.48-1.21 2.68-2.69 2.68-.65 
                        0-1.28-.25-1.76-.67v-.01a3.853 3.853 0 0 0-3.76-3.06c-.61 0-1.1.49-1.1 
                        1.1s.49 1.1 1.1 1.1c.39 0 .76.14 1.04.38-.49.72-1.3 1.16-2.18 1.16a2.684 
                        2.684 0 1 1 0-5.37c.29 0 .51-.02.68-.06.57-.04 1.01-.51 1.01-1.09v-6.53c0-.9.73-1.63 
                        1.64-1.63.9 0 1.64.73 1.64 1.63v8.22c0 .61.49 1.1 1.1 1.1.6 0 1.1-.49 1.1-1.1v-.49c1.24.24 
                        2.18 1.33 2.18 2.64zm6.47-3.4c0 .3-.24.54-.54.54s-.54-.24-.54-.54v-1.94c0-.61-.5-1.1-1.1-1.1-.61 
                        0-1.1-.49-1.1-1.09 0-.61-.49-1.1-1.1-1.1h-4.27v-1.74c0-2.11-1.73-3.83-3.84-3.83-2.12 
                        0-3.84 1.72-3.84 3.83v1.74h-5.57c-2.42 0-4.38-1.97-4.38-4.38 0-1.59.86-3.02 2.18-3.79v2.15a2.744 
                        2.744 0 0 0 5.49 0v-.55h.54c1.32 0 2.43-.94 2.69-2.19h11c2.42 0 4.38 
                        1.97 4.38 4.38v9.61zm0-14.5a6.514 6.514 0 0 0-4.38-1.69h-12.05c-.6 
                        0-1.1.5-1.1 1.1v.55c0 .3-.24.54-.54.54h-1.64c-.61 0-1.1.5-1.1 1.1v1.65c0 
                        .3-.25.54-.55.54s-.54-.24-.54-.54v-3.73c0-.33-.15-.64-.4-.85-.26-.21-.59-.29-.92-.22-1.17.24-2.22.78-3.06 
                        1.55v-6.47c1.43.6 3 .93 4.64.93h17c1.64 0 3.21-.33 4.64-.93v6.47zm8.9-53.35l-3.55 
                        19.83c-.01.06-.02.11-.02.18v.01c-.05.11-.07.23-.07.36v15.33a9.92 9.92 
                        0 0 1-3.06 7.16c-.65.62-1.39 1.16-2.2 1.58a9.848 9.848 0 0 1-4.64 
                        1.16h-17c-1.67 0-3.25-.42-4.64-1.16-.81-.42-1.55-.96-2.2-1.58a9.92 
                        9.92 0 0 1-3.06-7.16v-8.37c0-1.81.74-3.45 1.93-4.63a6.524 6.524 0 0 
                        1 4.6-1.9h13.98c-.04.83-.22 1.63-.52 2.36-1.06 2.6-3.61 4.44-6.59 
                        4.44h-5.5c-.31 0-.58.12-.78.32-.2.2-.32.48-.32.78v3c0 .61.49 1.1 
                        1.1 1.1h1.55c2.95 0 5.35 2.4 5.35 5.35 0 .61.49 1.1 1.1 1.1.61 0 
                        1.1-.49 1.1-1.1 0-4.16-3.39-7.55-7.55-7.55h-.45v-.8h4.4c5.14 0 
                        9.32-4.18 9.32-9.32v-.78a1.103 1.103 0 0 0-1.1-1.1h-1.87l-.05-.18-3.92-13.28-1.24-4.21-1.64-5.56c-.53-1.8.5-3.71 
                        2.31-4.24.6-.18 1.22-.18 1.78-.04.72.17 1.37.58 1.84 1.16.28.34.5.74.63 1.19l3.37 
                        11.54 1.24 4.24 3.38 11.58a1.089 1.089 0 0 0 1.34.74c.44-.13.74-.53.78-.97 
                        0-.01.01-.03.01-.05l4.09-21.49a3.417 3.417 0 0 1 
                        3.88-2.88c1.87.27 3.16 2.01 2.89 3.84z" sketchjs:uid="1"/>
                </g>
            </svg>
        </router-link>
        <ul>
            <li><router-link to="/portfolio" class="menu-item">Portfolio</router-link></li>
            <li><router-link to="/services" class="menu-item">Services</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss">
@import "../assets/styles/colors.scss";
@import "../assets/styles/layout.scss";

.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: $section-vertical-spacing;

  ul {
    margin: $section-vertical-spacing 0 0 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .menu-item {
    padding: 1rem;
    position: relative;
    text-transform: uppercase;
    font-size: 1.25rem;

    &:after {
      position: absolute;
      content: "";
      transition: all 0.5s ease;
      transform: scaleX(0);
      width: 100%;
      height: 1px;
      text-align: left;
      bottom: 0;
      left: 0;
    }

    &:hover:after,
    &.router-link-active:after {
      background-color: $forest-green;
      transition: all 0.5s ease;
      transform: scaleX(1);
      visibility: visible;
    }
  }

  svg {
    path {
      stroke-dasharray: 500;
      stroke-dashoffset: 500;
      animation: draw 5s linear forwards;
    }

    &:hover path {
      animation: draw 5s alternate infinite;
    }
  }

  @keyframes draw {
    0% {
        stroke-dashoffset: 500;
    }
    100% {
      stroke-dashoffset: 0;
      fill: #fff410;
    }
  }
}
</style>

