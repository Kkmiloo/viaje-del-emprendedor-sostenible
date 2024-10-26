import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Root";
import { MenuLayout } from "../layout/MenuLayout";
import { GameLayout } from "../layout/GameLayout";

import GamePage from "../page/game/GamePage";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MenuLayout />,
      },
      {
        path: '/jugar',
        element: <GameLayout />,
        children: [
          {
            path: '',
            element: <GamePage />,
          },
        ],
      },
    ],
  },
]);