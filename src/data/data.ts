export type Menu = MenuItem[]

export type MenuItem = {
  title: string
  href: string
  subMenu?: Menu
}

export const menu: MenuItem = {
  title: 'root',
  href: '/',
  subMenu: [
    {
      title: 'root-a',
      href: '',
    },
    {
      title: 'root-b',
      href: '',
      subMenu: [
        {
          title: 'root-b-a',
          href: '',
        },
        {
          title: 'root-b-b',
          href: '',
        },
        {
          title: 'root-b-c',
          href: '',
          subMenu: [
            {
              title: 'root-b-c-a',
              href: '',
              subMenu: [
                {
                  title: 'root-b-c-a-a',
                  href: '',
                  subMenu: [
                    {
                      title: 'root-b-c-a-a-a',
                      href: '',
                    },
                    {
                      title: 'root-b-c-a-a-b',
                      href: '',
                    },
                    {
                      title: 'root-b-c-a-a-c',
                      href: '',
                    },
                    {
                      title: 'root-b-c-a-a-d',
                      href: '',
                    },
                    {
                      title: 'root-b-c-a-a-e',
                      href: '',
                    },
                  ],
                },
                {
                  title: 'root-b-c-a-b',
                  href: '',
                },
                {
                  title: 'root-b-c-a-c',
                  href: '',
                },
                {
                  title: 'root-b-c-a-d',
                  href: '',
                },
                {
                  title: 'root-b-c-a-e',
                  href: '',
                },
              ],
            },
            {
              title: 'root-b-c-b',
              href: '',
            },
            {
              title: 'root-b-c-c',
              href: '',
            },
            {
              title: 'root-b-c-d',
              href: '',
            },
          ],
        },
        {
          title: 'root-b-d',
          href: '',
        },
        {
          title: 'root-b-e',
          href: '',
        },
      ],
    },
    {
      title: 'root-c',
      href: '',
    },
    {
      title: 'root-d',
      href: '',
      subMenu: [
        {
          title: 'root-d-a',
          href: '',
        },
        {
          title: 'root-d-b',
          href: '',
        },
        {
          title: 'root-d-c',
          href: '',
          subMenu: [
            {
              title: 'root-d-c-a',
              href: '',
              subMenu: [
                {
                  title: 'root-d-c-a-a',
                  href: '',
                },
                {
                  title: 'root-d-c-a-b',
                  href: '',
                },
                {
                  title: 'root-d-c-a-d',
                  href: '',
                },
                {
                  title: 'root-d-c-a-e',
                  href: '',
                },
              ],
            },
            {
              title: 'root-d-c-b',
              href: '',
            },
            {
              title: 'root-d-c-c',
              href: '',
            },
            {
              title: 'root-d-c-d',
              href: '',
            },
            {
              title: 'root-d-c-e',
              href: '',
            },
            {
              title: 'root-d-c-f',
              href: '',
            },
          ],
        },
        {
          title: 'root-d-d',
          href: '',
        },
        {
          title: 'root-d-e',
          href: '',
        },
      ],
    },
    {
      title: 'root-e',
      href: '',
    },
  ],
}
