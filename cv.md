# CV

## Nikolai Makarevich

<img src="https://avatars.githubusercontent.com/u/49314579?v=4" width="128">

##  Contacts

<img src="https://cdn-icons-png.flaticon.com/128/9946/9946341.png" width="12"> Tel: +7 (999) 215-25-07 <br>
<img src="https://cdn-icons-png.flaticon.com/128/726/726623.png" width="12"> e-mail: nikoladze529@mail.ru <br>
<img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" width="12"> GitHub: [NMakarevich](https://github.com/NMakarevich) <br>
<img src="https://cdn-icons-png.flaticon.com/128/16166/16166102.png" width="12"> Telegram: [@nmakarevich94](https://t.me/nmakarevich94) <br>
<img src="https://cdn-icons-png.flaticon.com/128/4945/4945973.png" width="12"> Discord: [#NMakarevich](https://discord.com/users/856975217322229771)

## About me
I like creating user-frendly interfaces. I have an experience in development on React, Angular and NodeJS.

## Skills
<div style="display: flex; gap: 8px">
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px"><img src="https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/html5/html5-original.svg" width="32">HTML</span>
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px"><img src="https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/css3/css3-original.svg" width="32">CSS</span>
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px"><img src="https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/sass/sass-original.svg" width="32">SASS</span>
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px"><img src="https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/javascript/javascript-plain.svg" width="32">Javascript</span>
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px"><img src="https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/typescript/typescript-plain.svg" width="32">Typescript</span>
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px"><img src="https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/react/react-original.svg" width="32">React</span>
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px"><img src="https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/nextjs/nextjs-original.svg" width="32">NextJS</span>
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px"><img src="https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/angular/angular-original.svg" width="32">Angular</span>
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px"><img src="https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/nodejs/nodejs-original.svg" width="32">NodeJS</span>
<span style="display: flex; flex-direction: column; align-items: center; gap: 4px"><img src="https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/nestjs/nestjs-original.svg" width="32">NestJS</span>
</div>

## Education

- 2012-2016 ITMO Univercity - Laser tecnique and laser tecnologies (Bachelor)
- 2016-2018 ITMO Univercity - Laser teqnique and laser tecnologies (Master)
- 2021 RSSchool - JS/FE
- 2022 RSSchool - Angular
- 2022 RSSchool - NodeJS
- 2024 RSSchool - React
- 2025 RSSchool - React
- 2025 RSSchool - Angular
- 2025 RSSchool - NodeJS

## My projects
1. [GraphiQL App](https://github.com/NMakarevich/graphiql-app)
2. [RS Clone](https://github.com/exact84/RS-Clone)
3. [Metrology API](https://github.com/NMakarevich/metrology-api)
4. [Task Manager](https://github.com/NMakarevich/task-manager)
5. [Carousel React](https://github.com/NMakarevich/carousel-react)

## Code Examples

```typescript
updateTodo = (todo: TodoItem, date: string) => {
    this.todos.update((todos) => {
      const index = todos[date].findIndex(({ id }) => id === todo.id);
      todos[date][index] = { ...todo };
      return { ...todos };
    });
    localStorage.setItem(LS_TASKS, JSON.stringify(this.todos()));
  };
```

## Languages
- Russian - Native
- English - A2