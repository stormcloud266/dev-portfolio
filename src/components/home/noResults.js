import React from "react"
import styled from "styled-components"

const NoResults = props => {
  console.log(props)
  return (
    <Container>
      <Text>No Results</Text>

      <svg
        viewBox="0 0 579 500"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        {...props}
      >
        <path
          d="M363.775 339.87l-240.652 61.97c-16.883 4.328-34.341-5.98-38.707-22.854L11.637 96.361c-4.328-16.884 5.98-34.342 22.854-38.708L258.378 0l57.305 25.653 70.946 275.51c4.328 16.883-5.98 34.342-22.854 38.707z"
          fill="#f2f2f2"
          fillRule="nonzero"
        />
        <path
          d="M36.773 66.515c-12.016 3.109-19.357 15.54-16.275 27.564l72.779 282.626c3.109 12.016 15.542 19.357 27.564 16.275l240.652-61.971c12.017-3.108 19.357-15.541 16.275-27.565L307.92 32.204 257.56 9.66 36.773 66.515z"
          fill="#fff"
          fillRule="nonzero"
        />
        <path
          d="M315.071 27.112l-37.244 9.59c-5.624 1.449-11.443-1.988-12.892-7.612l-7.083-27.508a.665.665 0 01.91-.77l56.413 25.054a.663.663 0 01-.104 1.246z"
          fill="#f2f2f2"
          fillRule="nonzero"
        />
        <path
          d="M295.477 268.467l-109.565 28.215c-.431.11-.874.167-1.32.167-2.903 0-5.293-2.39-5.293-5.293a5.308 5.308 0 013.973-5.126l109.566-28.214a5.3 5.3 0 011.32-.168c2.903 0 5.292 2.39 5.292 5.294a5.305 5.305 0 01-3.973 5.125zM321.077 280.322l-130.71 33.66c-.431.11-.874.167-1.32.167-2.903 0-5.293-2.39-5.293-5.293a5.308 5.308 0 013.973-5.126l130.71-33.66a5.27 5.27 0 011.315-.166c2.903 0 5.293 2.39 5.293 5.294a5.306 5.306 0 01-3.968 5.124z"
          fill="#ccc"
          fillRule="nonzero"
        />
        <circle
          cx={135.555}
          cy={323.878}
          r={19.423}
          fill="#e6e6e6"
          transform="matrix(.96319 0 0 .96319 10.629 0)"
        />
        <path
          d="M283.827 219.507l-145.513 37.458c-8.698 2.228-17.691-3.083-19.94-11.776L87.88 126.726c-2.228-8.697 3.083-17.69 11.776-19.939L245.17 69.33c8.697-2.229 17.69 3.082 19.939 11.775l30.494 118.463c2.228 8.698-3.083 17.691-11.776 19.94z"
          fill="#fff"
          fillRule="nonzero"
        />
        <path
          d="M283.827 219.507l-145.513 37.458c-8.698 2.228-17.691-3.083-19.94-11.776L87.88 126.726c-2.228-8.697 3.083-17.69 11.776-19.939L245.17 69.33c8.697-2.229 17.69 3.082 19.939 11.775l30.494 118.463c2.228 8.698-3.083 17.691-11.776 19.94zM100.136 108.652c-7.67 1.984-12.356 9.92-10.39 17.594l30.494 118.463c1.983 7.67 9.92 12.356 17.594 10.39l145.513-37.457c7.67-1.984 12.356-9.92 10.39-17.594L263.243 81.585c-1.983-7.67-9.92-12.356-17.594-10.39l-145.513 37.457z"
          fill="#e6e6e6"
          fillRule="nonzero"
        />
        <path
          d="M237.787 109.162l-73.439 18.904a2.642 2.642 0 01-3.187-1.656 2.54 2.54 0 011.785-3.216l74.756-19.243c3.02 1.53 2.226 4.66.084 5.21zM241.103 122.043l-73.44 18.905a2.641 2.641 0 01-3.185-1.656 2.54 2.54 0 011.785-3.216l74.755-19.243c3.02 1.53 2.225 4.66.084 5.21h.001z"
          fill="#f2f2f2"
          fillRule="nonzero"
        />
        <path
          d="M153.676 152.368l-22.412 5.77a2.868 2.868 0 01-3.471-2.05l-6.808-26.449a2.867 2.867 0 012.05-3.47l22.412-5.77a2.867 2.867 0 013.47 2.05l6.809 26.449a2.866 2.866 0 01-2.05 3.47z"
          fill="#e6e6e6"
          fillRule="nonzero"
        />
        <path
          d="M247.679 148.473l-112.082 28.852a2.64 2.64 0 01-3.186-1.655 2.541 2.541 0 011.785-3.217l113.399-29.19c3.02 1.53 2.225 4.66.084 5.21zM250.996 161.359L138.915 190.21a2.64 2.64 0 01-3.187-1.655 2.541 2.541 0 011.785-3.217l113.4-29.19c3.019 1.53 2.224 4.66.083 5.21zM254.31 174.236l-112.08 28.851a2.641 2.641 0 01-3.187-1.655 2.541 2.541 0 011.785-3.217l113.398-29.19c3.021 1.53 2.226 4.66.084 5.21zM257.627 187.12l-112.08 28.852a2.64 2.64 0 01-3.187-1.655 2.542 2.542 0 011.784-3.217l113.4-29.19c3.02 1.53 2.225 4.66.083 5.21zM260.942 199.998l-112.08 28.851a2.641 2.641 0 01-3.188-1.654 2.54 2.54 0 011.785-3.216l113.399-29.192c3.02 1.53 2.226 4.66.084 5.211z"
          fill="#f2f2f2"
          fillRule="nonzero"
        />
        <path
          d="M142.574 318.513a1.942 1.942 0 01-1.227-.084l-.024-.01-5.097-2.161a1.957 1.957 0 01-1.192-1.8c0-1.072.882-1.954 1.954-1.954.263 0 .525.054.767.157l3.303 1.405 4.327-10.18a1.957 1.957 0 012.561-1.033h.001l-.026.067.027-.067a1.964 1.964 0 011.033 2.562l-5.09 11.97a1.96 1.96 0 01-1.316 1.126l-.001.002z"
          fill="#fff"
          fillRule="nonzero"
        />
        <path
          d="M456.08 447.572H207.577c-17.43-.02-31.766-14.356-31.785-31.785V123.94c.02-17.43 14.355-31.766 31.785-31.785h231.19l49.098 39.133v284.498c-.02 17.429-14.356 31.765-31.785 31.785z"
          fill="#e6e6e6"
          fillRule="nonzero"
        />
        <path
          d="M207.576 101.306c-12.411.013-22.62 10.223-22.635 22.635v291.846c.015 12.411 10.224 22.62 22.635 22.635H456.08c12.412-.015 22.621-10.224 22.635-22.635v-280.09l-43.147-34.391h-227.99z"
          fill="#fff"
          fillRule="nonzero"
        />
        <path
          d="M407.746 186.167h-113.14c-2.904 0-5.293-2.39-5.293-5.293 0-2.904 2.39-5.294 5.293-5.294h113.14c2.903 0 5.293 2.39 5.293 5.294 0 2.903-2.39 5.293-5.293 5.293zM429.58 204.03H294.606c-2.9-.003-5.286-2.392-5.286-5.292s2.385-5.29 5.286-5.293h134.98c2.904 0 5.294 2.39 5.294 5.293s-2.39 5.293-5.294 5.293h-.006z"
          fill="#f199b9"
          fillRule="nonzero"
        />
        <path
          d="M407.746 255.636H294.61c-2.903 0-5.293 2.388-5.293 5.292 0 2.903 2.39 5.293 5.293 5.293h113.136c2.904 0 5.293-2.39 5.293-5.293 0-2.904-2.389-5.292-5.293-5.292zM429.582 273.503H294.61c-2.903 0-5.293 2.388-5.293 5.292s2.39 5.293 5.293 5.293h134.972c2.904 0 5.292-2.39 5.292-5.293 0-2.904-2.388-5.292-5.292-5.292zM407.746 346.282h-113.14c-2.904 0-5.293-2.388-5.293-5.292s2.39-5.293 5.293-5.293h113.14c2.903 0 5.293 2.389 5.293 5.293 0 2.904-2.39 5.292-5.293 5.292zM429.58 364.146H294.606c-2.9-.003-5.286-2.391-5.286-5.292s2.385-5.29 5.286-5.294h134.98c2.904 0 5.294 2.39 5.294 5.294 0 2.904-2.39 5.292-5.294 5.292h-.006z"
          fill="#ccc"
          fillRule="nonzero"
        />
        <circle
          cx={245.916}
          cy={197.06}
          r={19.423}
          fill="#f199b9"
          transform="matrix(.96319 0 0 .96319 10.629 0)"
        />
        <path
          d="M245.638 196.942a1.94 1.94 0 01-1.168-.387l-.02-.017-4.397-3.362a1.955 1.955 0 01-.768-1.554c0-1.072.882-1.953 1.954-1.953.43 0 .85.142 1.191.405l2.848 2.184 6.73-8.78a1.954 1.954 0 012.738-.36l-.04.057.042-.058a1.965 1.965 0 01.36 2.74l-7.915 10.321c-.37.482-.946.764-1.553.762l-.002.002z"
          fill="#fff"
          fillRule="nonzero"
        />
        <path
          d="M268.122 269.856v.013c0 10.261-8.443 18.706-18.705 18.708a4.23 4.23 0 01-.481-.02c-10.078-.259-18.228-8.62-18.228-18.7 0-10.263 8.446-18.708 18.707-18.708 10.263 0 18.707 8.445 18.707 18.707z"
          fill="#ccc"
          fillRule="nonzero"
        />
        <circle
          cx={245.916}
          cy={363.295}
          r={19.423}
          fill="#ccc"
          transform="matrix(.96319 0 0 .96319 10.629 0)"
        />
        <path
          d="M486.909 132.548h-38.46c-5.807 0-10.585-4.778-10.585-10.586V93.556a.664.664 0 011.072-.518l48.384 38.33a.663.663 0 01-.411 1.18z"
          fill="#ccc"
          fillRule="nonzero"
        />
        <path
          d="M268.122 269.862v.007c0 10.261-8.443 18.706-18.705 18.708a4.23 4.23 0 01-.481-.02 40.537 40.537 0 013.63-37.14c8.949 1.533 15.554 9.367 15.556 18.445zM289.313 260.933c.005-2.904 2.393-5.293 5.297-5.297h28.193a40.012 40.012 0 013.477 10.585h-31.67c-2.902 0-5.292-2.386-5.297-5.288zM326.935 273.503a40.383 40.383 0 01-1.407 10.585H294.61c-2.903 0-5.293-2.39-5.293-5.293 0-2.904 2.39-5.292 5.293-5.292h32.325z"
          fill="#f199b9"
          fillRule="nonzero"
        />
        <path
          d="M563.758 494.545c-3.576 4.47-10.197 5.206-14.667 1.63l-111.363-89.07a10.444 10.444 0 01-3.832-9.468c.725-5.68 5.993-9.755 11.671-9.03 1.901.243 3.7 1.003 5.196 2.2l111.363 89.071c4.47 3.577 5.207 10.197 1.632 14.667z"
          fill="#3f3d56"
          fillRule="nonzero"
        />
        <path
          d="M452.395 405.474c-18.159 22.704-46.916 34.344-75.754 30.664-45.424-5.796-78.033-47.945-72.236-93.37 5.796-45.424 47.945-78.032 93.37-72.236a83.479 83.479 0 0141.571 17.614c35.714 28.632 41.6 81.55 13.049 117.328zM338.316 314.23a62.608 62.608 0 00-13.21 31.18c-4.348 34.069 20.108 65.68 54.177 70.027 34.068 4.348 65.68-20.109 70.027-54.177 2.76-21.629-5.971-43.197-22.999-56.816-26.832-21.413-66.523-16.999-87.995 9.786z"
          fill="#3f3d56"
          fillRule="nonzero"
        />
      </svg>
    </Container>
  )
}

export default NoResults

const Container = styled.div`
  max-width: 36rem;
  width: 100%;
  margin-top: var(--s-9);
  margin-bottom: var(--s-9);
`

const Text = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: var(--color-text);
  font-size: var(--s-7);
  margin-bottom: var(--s-9);
`