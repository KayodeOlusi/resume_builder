import { motion } from "framer-motion";

const svg_variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const path_variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const LoginSvg = () => (
  <motion.svg
    variants={svg_variants}
    initial="hidden"
    animate="visible"
    width="727"
    height="600"
    viewBox="0 0 727 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="md:w-64 md:h-64 lg:w-[31rem] lg:h-[31rem] xl:w-full xl:h-full"
  >
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M0 476.406H726.903V476.043H0V476.406Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M491.171 492.637H506.409V492.273H491.171V492.637Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M94.3981 485.004H152.919V485.367H94.3981V485.004Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M181.995 486.437H267.991V486.074H181.995V486.437Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M366.312 486.437H391.074V486.074H366.312V486.437Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M569.083 488.376H648.464V488.739H569.083V488.376Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M299.807 494.726H332.599V494.362H299.807V494.726Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M656.941 488.557H677.747V488.921H656.941V488.557Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M63.8441 0.363464C59.468 0.363464 55.909 3.92239 55.909 8.29834V402.906C55.909 407.282 59.468 410.841 63.8441 410.841H344.572C348.945 410.841 352.506 407.282 352.506 402.906V8.29834C352.506 3.92239 348.945 0.363464 344.572 0.363464H63.8441ZM344.572 411.205H63.8441C59.2681 411.205 55.5455 407.483 55.5455 402.906V8.29834C55.5455 3.72321 59.2681 0 63.8441 0H344.572C349.146 0 352.869 3.72321 352.869 8.29834V402.906C352.869 407.483 349.146 411.205 344.572 411.205Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M378.298 0.363464C373.923 0.363464 370.364 3.92239 370.364 8.29834V402.906C370.364 407.282 373.923 410.841 378.298 410.841H659.026C663.401 410.841 666.961 407.282 666.961 402.906V8.29834C666.961 3.92239 663.401 0.363464 659.026 0.363464H378.298ZM659.026 411.205H378.298C373.723 411.205 370.001 407.483 370.001 402.906V8.29834C370.001 3.72321 373.723 0 378.298 0H659.026C663.601 0 667.325 3.72321 667.325 8.29834V402.906C667.325 407.483 663.601 411.205 659.026 411.205Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M105.856 258.014H303.981V27.1556H105.856V258.014Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M100.472 258.014H301.464V27.1556H100.472V258.014Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M105.856 270.949H303.981V258.014H105.856V270.949Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M75.8552 270.949H265.065V258.014H75.8552V270.949Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M293.926 248.221V36.947H108.01V248.221H293.926Z"
      fill="#F4FBFE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M267.177 248.221L222.931 36.947H164.928L209.175 248.221H267.177Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M199.788 248.221L155.541 36.947H129.347L173.593 248.221H199.788Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M108.967 226.113V35.624H108.01V226.113H108.967Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M309.639 26.8227V109.015H287.892C287.892 109.015 248.818 83.5284 239.939 31.0998C239.037 25.7745 243.114 20.9043 248.514 20.9043H303.721C306.99 20.9043 309.639 23.5546 309.639 26.8227Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M309.639 240.779V115.652H287.891C287.891 115.652 275.389 140.909 262.921 169.962C248.537 203.476 273.166 240.779 309.639 240.779Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M288.531 115.652H308.839C310.043 115.652 311.019 114.676 311.019 113.472V111.194C311.019 109.991 310.043 109.015 308.839 109.015H288.531C287.327 109.015 286.352 109.991 286.352 111.194V113.472C286.352 114.676 287.327 115.652 288.531 115.652Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M94.3134 26.8227V109.015H116.061C116.061 109.015 155.134 83.5284 164.014 31.0998C164.915 25.7745 160.839 20.9043 155.439 20.9043H100.231C96.9638 20.9043 94.3134 23.5546 94.3134 26.8227Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M94.3134 240.779V115.652H116.061C116.061 115.652 128.564 140.909 141.032 169.962C155.416 203.476 130.786 240.779 94.3134 240.779Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M115.422 115.652H95.1136C93.9097 115.652 92.9341 114.676 92.9341 113.472V111.194C92.9341 109.991 93.9097 109.015 95.1136 109.015H115.422C116.625 109.015 117.6 109.991 117.6 111.194V113.472C117.6 114.676 116.625 115.652 115.422 115.652Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M536.985 212.847H624.259V55.4976H536.985V212.847Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M527.207 212.847H622.022V55.4976H527.207V212.847Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M536.985 203.068H612.244V65.2769H536.985V203.068Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M563.28 113.452H585.951V93.0783H563.28V113.452Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M563.28 144.359H585.951V123.985H563.28V144.359Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M563.28 175.266H585.951V154.893H563.28V175.266Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M443.644 176.036C470.007 176.036 491.378 154.665 491.378 128.301C491.378 101.938 470.007 80.5656 443.644 80.5656H440.708V176.036H443.644Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M392.974 128.301C392.974 154.665 414.345 176.036 440.708 176.036C467.07 176.036 488.442 154.665 488.442 128.301C488.442 101.938 467.07 80.5656 440.708 80.5656C414.345 80.5656 392.974 101.938 392.974 128.301Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M404.718 128.301C404.718 148.178 420.83 164.292 440.708 164.292C460.583 164.292 476.697 148.178 476.697 128.301C476.697 108.425 460.583 92.3109 440.708 92.3109C420.83 92.3109 404.718 108.425 404.718 128.301Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M425.82 141.678L423.016 137.655L437.983 127.214L433.044 103.175L437.849 102.188L443.434 129.389L425.82 141.678Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M208.623 481.193H271.004V312.642H208.623V481.193Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M225.281 481.193H208.623V453.278H242.745L225.281 481.193Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M582.623 481.193H645.006V312.642H582.623V481.193Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M208.623 471.584H597.161V312.642H208.623V471.584Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M580.503 481.193H597.161V453.278H563.036L580.503 481.193Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M221.544 384.815H584.238V326.31H221.544V384.815Z"
      fill="#DEEBF8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M221.544 457.453H584.238V398.948H221.544V457.453Z"
      fill="#DEEBF8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M475.307 283.153C475.307 290.345 481.138 296.175 488.329 296.175C495.522 296.175 501.352 290.345 501.352 283.153C501.352 275.961 495.522 270.13 488.329 270.13C481.138 270.13 475.307 275.961 475.307 283.153Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M497.517 289.36C497.517 294.982 502.075 299.539 507.697 299.539C513.319 299.539 517.876 294.982 517.876 289.36C517.876 283.736 513.319 279.18 507.697 279.18C502.075 279.18 497.517 283.736 497.517 289.36Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M453.016 289.36C453.016 296.552 458.847 302.383 466.039 302.383C473.233 302.383 479.061 296.552 479.061 289.36C479.061 282.168 473.233 276.336 466.039 276.336C458.847 276.336 453.016 282.168 453.016 289.36Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M431.661 285.535C431.661 292.727 437.492 298.558 444.684 298.558C451.876 298.558 457.706 292.727 457.706 285.535C457.706 278.343 451.876 272.513 444.684 272.513C437.492 272.513 431.661 278.343 431.661 285.535Z"
      fill="#F1F7FD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M543.562 287.236C543.562 287.236 541.774 312.642 473.227 312.642C404.679 312.642 402.892 287.236 402.892 287.236H543.562Z"
      fill="#CADEF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M645.328 525.24C645.328 534.332 519.128 541.701 363.451 541.701C207.775 541.701 81.5748 534.332 81.5748 525.24C81.5748 516.148 207.775 508.777 363.451 508.777C519.128 508.777 645.328 516.148 645.328 525.24Z"
      fill="#ECF4FB"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M218.61 495.616L227.156 503.261L243.414 486.327L234.87 478.682L218.61 495.616Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M247.875 511.531H258.652L260.052 486.573H249.274L247.875 511.531Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M259.218 510.284H247.109C246.668 510.284 246.335 510.588 246.309 511.019L245.722 520.599C245.662 521.593 246.594 522.533 247.609 522.517C251.825 522.444 253.839 522.195 259.164 522.195C262.439 522.195 276.367 522.535 280.891 522.535C285.315 522.535 285.286 518.062 283.368 517.658C274.772 515.841 264.117 513.336 261.074 510.947C260.525 510.516 259.862 510.284 259.218 510.284Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M229.512 500.192L219.125 493.199C218.737 492.938 218.242 492.952 217.936 493.233L209.996 501.246C209.291 501.896 209.522 503.015 210.38 503.675C217.005 508.778 221.794 512.629 225.565 516.875C229.975 521.836 232.289 522.535 242.466 522.535C247.173 522.535 249.835 518.571 247.917 517.965C230.956 512.593 235.49 510.259 231.372 502.396C230.924 501.541 230.334 500.744 229.512 500.192Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M299.913 153.653C300.11 154.288 300.438 155.262 300.731 156.084L301.663 158.679C302.306 160.41 303.002 162.131 303.745 163.825C305.225 167.212 306.831 170.529 308.627 173.664C312.2 179.919 316.546 185.574 321.667 189.197L322.569 189.818L322.563 189.877C322.543 189.908 322.559 189.975 322.774 190.004C323.201 190.087 324.337 189.851 325.583 189.245C328.121 188.015 331.043 185.802 333.722 183.328C336.466 180.864 339.107 178.087 341.698 175.219C344.296 172.379 346.834 169.307 349.237 166.356L356.163 170.542C352.485 178.132 348.259 185.167 342.695 191.879C339.831 195.171 336.797 198.472 332.366 201.246C330.13 202.597 327.467 203.927 323.88 204.347C322.098 204.53 320.081 204.393 318.151 203.819C317.184 203.543 316.258 203.146 315.388 202.693L313.722 201.748C309.495 199.259 305.888 196.118 302.793 192.735C299.666 189.363 297.033 185.722 294.712 181.977C292.379 178.235 290.398 174.362 288.652 170.409C287.789 168.429 286.985 166.429 286.237 164.401C285.865 163.386 285.492 162.367 285.158 161.327C284.816 160.249 284.524 159.314 284.171 158.021L299.913 153.653Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M314.944 179.339L296.35 189.633C296.35 189.633 295.797 188.832 294.896 187.452C294.243 186.433 293.398 185.096 292.426 183.526C286.958 174.643 277.917 158.418 280.256 151.6C283.876 141.016 297.222 141.191 303.78 153.461C307.166 159.799 310.219 167.068 312.283 172.273C312.967 173.989 313.535 175.486 313.97 176.649C314.596 178.335 314.944 179.339 314.944 179.339Z"
      fill="#3359B1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M313.97 176.649L294.896 187.452C294.243 186.433 293.398 185.096 292.426 183.526L312.283 172.273C312.967 173.989 313.535 175.486 313.97 176.649Z"
      fill="#2955AD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M279.977 152.814C284.135 150.812 288.931 152.487 293.965 160.452C298.936 168.335 303.303 181.729 303.774 185.525L296.345 189.633C296.345 189.633 278.445 163.412 279.977 152.814Z"
      fill="#2955AD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M348.006 168.122L351.713 156.27L361.339 163.323C361.339 163.323 356.083 173.885 352.517 172.927L348.006 168.122Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M361.857 151.731L367.273 158.373L361.339 163.323L351.713 156.27L361.857 151.731Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M243.408 486.33L235.029 495.06L226.479 487.41L234.859 478.68L243.408 486.33Z"
      fill="#B4574D"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M249.271 486.579H260.054L259.327 499.443H248.544L249.271 486.579Z"
      fill="#B4574D"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M297.222 237.927H239.579C239.172 232.78 240.364 216.033 239.478 194.705C238.881 180.385 237.34 164.001 233.749 147.689C233.487 146.526 233.225 145.378 232.949 144.215C232.949 144.215 235.871 143.619 240.06 143.008C243.533 142.499 247.894 141.976 252.17 141.772C259.525 141.423 270.181 141.191 276.665 141.772C280.432 142.121 284.109 142.746 287.045 143.313C290.796 144.069 293.355 144.767 293.355 144.767C293.355 144.767 307.21 177.318 297.222 237.927Z"
      fill="#3359B1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M239.478 194.71C238.88 180.39 237.339 164.005 233.75 147.694C237.603 147.359 244.188 147.737 245.279 153.959C246.455 160.647 244.972 176.377 239.478 194.71Z"
      fill="#2955AD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M296.671 237.376C296.671 237.376 308.024 315.966 311.899 358.747C315.009 393.061 240.792 495.451 240.792 495.451L226.435 481.941C226.435 481.941 280.644 390.19 276.47 351.988C272.43 314.983 258.728 237.376 258.728 237.376H296.671Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M276.465 351.982C274.386 332.923 269.734 303.062 265.736 278.609C267.829 274.509 273.7 266.214 273.7 266.214C278.962 284.401 290.402 352.958 274.08 445.549C257.071 472.97 240.788 495.444 240.788 495.444L238.564 460.087C254.28 430.517 279.358 378.427 276.465 351.982Z"
      fill="#111B2E"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M225.562 481.121L241.665 496.273L246.847 490.706L228.432 473.926L225.562 481.121Z"
      fill="#9ABEE8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M276.172 237.376C276.172 237.376 277.197 319.743 275.45 350.601C273.535 384.392 263.95 496.34 263.95 496.34H244.209C244.209 496.34 244.799 387.121 243.608 353.663C242.319 317.353 238.974 237.376 238.974 237.376H276.172Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M243.414 496.34H264.746L265.929 488.846L242.386 490.018L243.414 496.34Z"
      fill="#9ABEE8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M243.402 159.865L240.846 164.277C239.981 165.788 239.136 167.32 238.317 168.861C236.665 171.939 235.063 175.038 233.544 178.155C232.054 181.279 230.622 184.421 229.344 187.571C228.125 190.725 226.911 193.896 226.071 197.026L225.898 197.616L225.812 197.911L225.786 197.976C225.757 197.991 225.734 198.106 225.703 198.238C225.657 198.538 225.657 199.023 225.708 199.589C225.801 200.734 226.113 202.165 226.561 203.629C227.478 206.574 228.762 209.743 230.246 212.85C233.183 219.093 236.682 225.453 240.211 231.594L233.834 236.578C228.515 231.114 223.768 225.386 219.472 218.946C217.374 215.697 215.325 212.347 213.666 208.458C212.833 206.507 212.068 204.433 211.542 201.98C211.29 200.747 211.109 199.41 211.1 197.883C211.109 197.104 211.143 196.306 211.284 195.423L211.385 194.817L211.46 194.447L211.609 193.707C213.132 185.751 215.78 178.439 218.815 171.396C220.346 167.883 222.015 164.454 223.797 161.092C224.697 159.413 225.618 157.751 226.57 156.097C227.522 154.412 228.476 152.86 229.616 151.101L243.402 159.865Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M247.255 163.841C244.827 171.052 240.845 179.687 237.908 185.721C237.136 187.32 236.425 188.745 235.844 189.893C234.824 191.914 234.185 193.135 234.185 193.135L212.349 181.039C212.349 181.039 212.625 180.124 213.119 178.583C213.497 177.42 213.991 175.893 214.602 174.134C218.237 163.768 225.667 145.276 232.949 144.215C243.84 142.63 251.674 150.771 247.255 163.841Z"
      fill="#3359B1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M237.908 185.721C237.136 187.32 236.425 188.745 235.844 189.893L213.119 178.583C213.497 177.42 213.991 175.893 214.602 174.134L237.908 185.721Z"
      fill="#2955AD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M286.624 150.161C285.461 154.015 282.204 159.16 273.321 161.791L270.995 162.489L268.626 162.067C250.382 158.796 243.664 149.012 242.501 147.079L240.06 143.008C243.533 142.499 247.894 141.976 252.17 141.772C259.525 141.423 270.181 141.191 276.665 141.772C280.432 142.121 284.109 142.746 287.045 143.313C287.409 145.465 287.338 147.791 286.624 150.161Z"
      fill="#2955AD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M270.415 152.043C255.797 149.424 251.223 141.83 251.223 141.83C256.56 136.568 254.509 122.189 252.692 114.295L259.248 119.733L268.175 127.147C267.913 128.354 267.711 129.576 267.608 130.752C267.128 135.594 268.378 139.999 275.502 141.685C275.502 141.685 281.4 148.778 270.415 152.043Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M268.175 127.147C267.913 128.354 267.711 129.576 267.608 130.752C264.279 130.084 259.832 126.536 259.365 123.134C259.19 121.857 259.161 120.619 259.249 119.733L268.175 127.147Z"
      fill="#B4574D"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M274.233 86.7529C279.545 89.1546 282.505 104.12 275.74 107.339C268.977 110.556 264.168 82.204 274.233 86.7529Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M249.989 102.943C252.269 113.423 253.068 119.654 259.259 124.436C268.57 131.63 280.912 125.238 281.816 114.4C282.63 104.642 278.766 89.143 267.74 86.1744C256.877 83.2508 247.71 92.4606 249.989 102.943Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M237.821 92.5406C232.731 94.8041 235.623 101.781 239.087 106.217C243.898 112.379 248.987 115.259 252.458 112.417C255.57 110.857 257.62 101.691 254.904 96.0311C259.698 92.8866 269.624 96.7755 272.722 91.6392C275.819 86.5029 278.021 86.9652 283.479 90.3337C288.937 93.7007 293.295 80.3751 279.091 77.8964C286.945 81.4189 285.138 88.3042 279.392 81.2532C275.336 76.2739 265.617 70.7829 258.856 78.1973C253.893 83.6404 236.377 75.2795 237.821 92.5406Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M247.574 113.878C249.448 116.131 252.027 117.46 254.226 117.834C257.532 118.398 258.274 115.336 256.595 112.379C255.083 109.716 251.542 106.215 248.591 106.996C245.683 107.765 245.432 111.303 247.574 113.878Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M266.525 103.982C266.657 104.841 267.223 105.484 267.787 105.415C268.351 105.349 268.701 104.597 268.569 103.738C268.437 102.879 267.871 102.236 267.307 102.303C266.743 102.37 266.393 103.121 266.525 103.982Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M276.283 102.82C276.415 103.681 276.98 104.324 277.545 104.255C278.109 104.19 278.459 103.437 278.325 102.578C278.193 101.718 277.629 101.076 277.065 101.143C276.499 101.21 276.15 101.961 276.283 102.82Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M273.247 103.619C273.247 103.619 275.975 108.343 278.504 110.481C277.196 112.081 274.499 111.741 274.499 111.741L273.247 103.619Z"
      fill="#B6413C"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M271.33 114.476C267.904 114.476 265.99 112.34 265.904 112.24L265.927 111.881L266.288 111.904C266.308 111.927 268.49 114.359 272.282 113.909C272.421 113.887 272.548 113.991 272.564 114.131C272.581 114.272 272.481 114.399 272.342 114.415C271.991 114.457 271.654 114.476 271.33 114.476Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M263.022 101.202L262.775 101.138C262.53 101.002 262.441 100.691 262.578 100.443C263.931 98.0054 266.295 97.863 266.395 97.8586C266.673 97.8339 266.917 98.0607 266.93 98.3427C266.945 98.6248 266.728 98.8632 266.448 98.8777C266.371 98.8835 264.54 99.0115 263.47 100.939C263.377 101.108 263.203 101.202 263.022 101.202Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M279.962 98.9809C279.798 98.9809 279.638 98.9024 279.539 98.7585C278.232 96.8395 276.332 96.8046 276.315 96.8046C276.031 96.8031 275.804 96.5734 275.806 96.2928C275.807 96.0108 276.037 95.784 276.316 95.784C276.351 95.7593 278.766 95.8087 280.382 98.1828C280.542 98.4154 280.481 98.7338 280.248 98.8923L279.962 98.9809Z"
      fill="#1A2847"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M260.857 511.413C262.783 511.793 264.205 511.735 264.708 511.235C264.917 511.029 264.975 510.735 264.887 510.339C264.844 510.157 264.757 510.043 264.609 509.986C263.899 509.714 262.107 510.616 260.857 511.413ZM263.037 512.161C262.043 512.161 260.941 511.956 260.166 511.776L259.977 511.578L260.08 511.325C260.423 511.087 263.481 509.009 264.791 509.517C265.096 509.636 265.298 509.882 265.376 510.229C265.503 510.799 265.398 511.257 265.061 511.591C264.634 512.016 263.873 512.161 263.037 512.161Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M261.695 507.413C261.487 507.413 261.31 507.488 261.156 507.634C260.506 508.26 260.417 510.036 260.448 511.06C261.386 510.267 262.456 508.557 262.291 507.787C262.261 507.639 262.178 507.464 261.813 507.42L261.695 507.413ZM260.222 511.783L260.108 511.754L259.972 511.554C259.962 511.421 259.719 508.32 260.807 507.272C261.102 506.99 261.46 506.868 261.873 506.923C262.368 506.983 262.692 507.253 262.783 507.683C263.031 508.858 261.425 511.109 260.352 511.747L260.222 511.783Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M232.101 503.947C234.426 505.221 236.259 505.78 237.078 505.436C237.324 505.334 237.479 505.15 237.552 504.872L237.494 504.601C236.96 503.96 234.183 503.86 232.101 503.947ZM236.492 506.035C234.909 506.035 232.527 504.792 231.111 503.962L230.995 503.688L231.22 503.496C231.798 503.452 236.903 503.11 237.879 504.282C238.052 504.488 238.107 504.737 238.037 505C237.924 505.435 237.665 505.737 237.27 505.9C237.044 505.993 236.781 506.035 236.492 506.035Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M234.602 500.99C233.27 500.99 232.136 502.672 231.68 503.459C233.228 503.261 235.585 502.297 235.73 501.614C235.764 501.458 235.623 501.305 235.309 501.154C235.069 501.041 234.832 500.99 234.602 500.99ZM231.239 503.997L231.029 503.882L231.013 503.636C231.094 503.469 233.044 499.516 235.525 500.704C236.21 501.029 236.283 501.437 236.222 501.718C235.972 502.888 232.73 503.963 231.244 503.997H231.239Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M237.328 229.208L248.058 227.339L242.551 239.759C242.551 239.759 232.757 239.702 233.205 234.653L237.328 229.208Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M256.065 233.58L251.024 243.616L242.552 239.759L248.059 227.339L256.065 233.58Z"
      fill="#C8675A"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M546.25 512.708C544.327 512.612 542.38 512.517 540.412 512.424L533.269 476.406H552.328L546.311 512.368C546.292 512.481 546.272 512.595 546.25 512.708ZM552.39 476.043H533.196L532.312 471.584H553.135L552.39 476.043ZM579.727 312.642H545.958L562.145 256.389H575.226C582.909 256.389 588.096 262.618 586.811 270.302L579.727 312.642Z"
      fill="#A2C4EA"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M552.328 476.406H533.269L533.196 476.043H552.389L552.328 476.406Z"
      fill="#9EC1E9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M553.135 471.584H532.313L529.51 457.453H555.499L553.135 471.584ZM565.288 398.948H521.124L525.19 384.815H567.652L565.288 398.948ZM577.44 326.31H542.025L545.958 312.642H579.727L577.44 326.31Z"
      fill="#A1C3EA"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M567.652 384.815H525.19L542.026 326.31H577.44L567.652 384.815Z"
      fill="#9FC2E9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M555.499 457.453H529.51L519.219 405.565L521.124 398.948H565.288L555.499 457.453Z"
      fill="#9FC2E9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M530.071 526.281H529.486C537.17 526.281 542.226 520.907 540.779 514.278L540.412 512.424C542.38 512.517 544.327 512.612 546.25 512.708C544.812 520.235 537.641 526.281 530.071 526.281Z"
      fill="#A0C3EA"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M285.811 339.465H282.39C281.954 320.731 280.494 304.846 278.777 292.392H297.61L285.811 339.465Z"
      fill="#89AEE1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M282.39 339.465H275.909C276.309 326.256 276.45 308.976 276.469 292.392H278.778C280.494 304.846 281.954 320.731 282.39 339.465Z"
      fill="#89AEE1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M242.043 312.642H230.52L231.58 306.305C232.488 300.881 236.38 296.181 241.292 293.885C241.543 300.092 241.795 306.413 242.043 312.642Z"
      fill="#A2C4EA"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M242.581 326.31H228.233L230.52 312.642H242.043C242.227 317.28 242.408 321.871 242.581 326.31Z"
      fill="#A1C3EA"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M243.085 339.465H226.032L228.233 326.31H242.58C242.758 330.882 242.928 335.3 243.085 339.465Z"
      fill="#9FC2E9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M275.909 339.465H243.085C242.928 335.3 242.758 330.882 242.581 326.31C242.408 321.871 242.227 317.28 242.043 312.642C241.796 306.413 241.543 300.092 241.292 293.885C243.339 292.93 245.562 292.392 247.822 292.392H276.469C276.45 308.976 276.309 326.256 275.909 339.465Z"
      fill="#89AEE1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M562.144 256.389H548.691L560.038 212.847H574.675L562.144 256.389ZM527.207 103.642L472.775 90.4834C464.713 84.264 454.611 80.5656 443.643 80.5656H440.708C438.363 80.5656 436.056 80.7356 433.802 81.0627L376.377 67.1804L375.785 69.2361L380.673 52.2498L527.207 94.416V103.642Z"
      fill="#DBE8F7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M574.675 212.847H560.038L562.586 203.068H577.488L574.675 212.847ZM536.985 106.004L527.207 103.642V94.416L536.985 97.2291V106.004Z"
      fill="#D9E8F7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M577.488 203.068H562.586L569.831 175.266H585.488L577.488 203.068ZM585.951 173.66V154.893H575.14L577.885 144.359H585.951V123.985H583.194L584.863 117.578L567.79 113.452H585.951V111.318L602.517 116.086L585.951 173.66ZM563.28 112.362L536.985 106.004V97.2291L563.28 104.796V112.362Z"
      fill="#DBE7F7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M585.95 113.452H567.789L563.28 112.362V104.796L585.95 111.318V113.452Z"
      fill="#D9E8F7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M585.951 144.359H577.885L583.194 123.985H585.951V144.359Z"
      fill="#D9E8F7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M585.488 175.266H569.831L575.14 154.893H585.95V173.66L585.488 175.266Z"
      fill="#D9E8F7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M472.775 90.4834L468.421 89.4309C460.608 83.8497 451.04 80.5656 440.708 80.5656H443.644C454.611 80.5656 464.714 84.264 472.775 90.4834Z"
      fill="#D6E4F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M468.421 89.4309L433.803 81.0628C436.056 80.7357 438.363 80.5656 440.708 80.5656C451.041 80.5656 460.608 83.8497 468.421 89.4309Z"
      fill="#D9E8F7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M545.958 312.642H534.032L538.243 296.486C543.264 291.472 543.562 287.236 543.562 287.236H540.653L548.691 256.389H562.145L545.958 312.642Z"
      fill="#D0E1F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M521.124 398.948H517.907L515.156 385.08L515.226 384.815H525.19L521.124 398.948ZM542.025 326.31H530.472L534.032 312.642H545.958L542.025 326.31Z"
      fill="#D1E1F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M525.19 384.815H515.226L530.472 326.31H542.026L525.19 384.815Z"
      fill="#D0E1F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M519.22 405.565L517.907 398.948H521.124L519.22 405.565Z"
      fill="#D0E1F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M538.243 296.486L540.653 287.236H543.562C543.562 287.236 543.264 291.472 538.243 296.486Z"
      fill="#D0E1F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M413.756 170.492C392.532 164.385 380.274 142.221 386.381 120.999C392.491 99.7688 414.65 87.5176 435.873 93.6251C457.104 99.734 469.357 121.887 463.248 143.118C457.141 164.341 434.986 176.601 413.756 170.492Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M416.053 162.509C399.235 157.671 389.525 140.112 394.364 123.296C399.203 106.474 416.761 96.7682 433.576 101.608C450.399 106.448 460.105 123.999 455.265 140.821C450.427 157.636 432.874 167.35 416.053 162.509Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M435.661 211.758L365.054 191.442L369.619 175.573L440.227 195.89L435.661 211.758Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M352.358 382.028L313.435 370.828L331.186 309.136L370.11 320.336L352.358 382.028Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M490.09 421.662L451.167 410.46L468.918 348.769L507.842 359.97L490.09 421.662Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M421.224 401.845L382.3 390.645L400.053 328.953L438.975 340.153L421.224 401.845Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M492.721 228.178L444.952 214.432L449.518 198.564L497.287 212.311L492.721 228.178Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M532.608 266.871L357.819 216.576L359.701 210.04L534.487 260.334L532.608 266.871Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M440.733 255.482L353.822 230.473L355.701 223.937L442.614 248.945L440.733 255.482Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M513.745 276.491L455.607 259.762L457.487 253.225L515.626 269.954L513.745 276.491Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M489.547 284.575L349.822 244.369L351.703 237.832L491.427 278.039L489.547 284.575Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M506.432 304.481L345.824 258.266L347.705 251.729L508.312 297.944L506.432 304.481Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M360.385 277.502L341.826 272.163L343.706 265.625L362.266 270.966L360.385 277.502Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M457.235 305.37L375.258 281.782L377.139 275.246L459.116 298.834L457.235 305.37Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M512.613 336.354L337.827 286.058L339.706 279.522L514.493 329.818L512.613 336.354Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M548.691 256.389H544.622L555.537 212.847H560.038L548.691 256.389ZM527.207 107.191L477.607 94.759C476.095 93.2282 474.48 91.7991 472.775 90.4834L527.207 103.642V107.191ZM427.909 82.3014L375.785 69.2361L376.377 67.1804L433.802 81.0627C431.795 81.3535 429.828 81.7693 427.909 82.3014Z"
      fill="#BDD3EF"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M560.038 212.847H555.537L557.988 203.068H562.586L560.038 212.847ZM536.985 109.642L527.207 107.191V103.642L536.985 106.004V109.642Z"
      fill="#BCD2EF"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M562.586 203.068H557.988L564.956 175.266H569.831L562.586 203.068ZM575.14 154.893H570.063L572.703 144.359H577.885L575.14 154.893ZM583.194 123.985H577.809L578.779 120.118L536.985 109.642V106.004L563.28 112.362V113.452H567.79L584.863 117.578L583.194 123.985Z"
      fill="#BDD2EF"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M567.789 113.452H563.28V112.362L567.789 113.452Z"
      fill="#BCD2EF"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M577.885 144.359H572.704L577.809 123.985H583.194L577.885 144.359Z"
      fill="#BCD2EF"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M569.831 175.266H564.956L570.064 154.893H575.14L569.831 175.266Z"
      fill="#BCD2EF"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M477.607 94.7591L473.666 93.7705C472.025 92.2033 470.273 90.7538 468.421 89.4309L472.775 90.4834C474.48 91.7991 476.095 93.2282 477.607 94.7591Z"
      fill="#B9CFEE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M473.666 93.7705L427.909 82.3014C429.828 81.7693 431.795 81.3535 433.802 81.0627L468.42 89.4309C470.273 90.7538 472.024 92.2033 473.666 93.7705Z"
      fill="#BCD2EF"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M534.032 312.642H530.523L533.624 300.269C535.492 298.996 537.01 297.716 538.243 296.486L534.032 312.642ZM540.653 287.236H536.891L544.622 256.389H548.691L540.653 287.236Z"
      fill="#B4CCED"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M515.156 385.08L515.104 384.815H515.226L515.156 385.08ZM530.472 326.31H527.096L530.523 312.642H534.032L530.472 326.31Z"
      fill="#B4CCED"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M515.226 384.815H515.104L513.923 378.863L527.096 326.31H530.472L515.226 384.815Z"
      fill="#B4CCED"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M533.624 300.269L536.89 287.236H540.653L538.243 296.486C537.01 297.716 535.492 298.996 533.624 300.269Z"
      fill="#B4CCED"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M311.572 292.392H304.197C303.421 286.429 302.652 280.638 301.919 275.2L302.985 270.949H303.98V266.975L319.718 204.19C320.613 204.348 321.509 204.423 322.374 204.423C322.889 204.423 323.393 204.396 323.88 204.347C327.467 203.927 330.13 202.597 332.366 201.246C335.201 199.471 337.465 197.481 339.477 195.415L311.572 292.392ZM323.275 189.999L352.506 73.3823V150.139L347.083 168.983C345.335 171.095 343.531 173.215 341.698 175.218C339.107 178.087 336.466 180.864 333.722 183.328C331.043 185.802 328.121 188.015 325.583 189.245C324.68 189.684 323.835 189.93 323.275 189.999ZM352.869 148.875V71.9328L354.859 63.9921L370.001 67.7866V89.3378L352.869 148.875ZM370.364 88.0759V67.8782L375.785 69.236L370.364 88.0759Z"
      fill="#DBE8F7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M352.506 150.139V73.3823L352.869 71.9329V148.876L352.506 150.139Z"
      fill="#D6E4F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M370.001 89.3378V67.7866L370.364 67.8782V88.0759L370.001 89.3378Z"
      fill="#D6E4F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M303.981 270.949H302.985L303.981 266.975V270.949Z"
      fill="#D6E4F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M322.374 204.423C321.509 204.423 320.614 204.348 319.718 204.19L323.276 189.999C323.835 189.93 324.68 189.684 325.583 189.245C328.121 188.015 331.043 185.802 333.723 183.328C336.466 180.864 339.108 178.087 341.698 175.219C343.532 173.215 345.336 171.095 347.083 168.983L339.477 195.415C337.465 197.481 335.201 199.471 332.366 201.246C330.13 202.597 327.467 203.927 323.881 204.347C323.394 204.396 322.889 204.423 322.374 204.423Z"
      fill="#D4D7EC"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M304.197 292.392H297.61L301.919 275.2C302.652 280.638 303.421 286.429 304.197 292.392Z"
      fill="#BECFEB"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M306.464 310.145C305.716 304.161 304.953 298.194 304.197 292.392H311.572L306.464 310.145Z"
      fill="#D0E1F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M298.027 339.465H285.811L297.61 292.392H304.197C304.953 298.194 305.717 304.161 306.464 310.145L298.027 339.465Z"
      fill="#CDDFF4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M311.573 292.392L339.477 195.415L311.573 292.392ZM347.083 168.983L352.506 150.139L347.083 168.983ZM352.869 148.876L370.001 89.3378L352.869 148.876ZM370.364 88.0759L375.786 69.236L370.364 88.0759Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M352.506 150.139L352.869 148.876L352.506 150.139Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M370.001 89.3378L370.364 88.0759L370.001 89.3378Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M339.477 195.415L347.083 168.983L339.477 195.415Z"
      fill="#D6E4F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M306.463 310.145L311.572 292.392L306.463 310.145Z"
      fill="#D6E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M298.027 339.465L306.464 310.145L298.027 339.465Z"
      fill="#D6E4F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M395.803 292.392H384.433L370.364 288.343V281.919L403.806 290.302C403.949 290.622 404.11 290.957 404.299 291.314C401.515 292.019 398.664 292.392 395.803 292.392ZM357.683 292.392H352.869V290.386L357.827 291.814L357.683 292.392ZM352.506 292.392H311.573L339.477 195.415C340.611 194.252 341.663 193.064 342.696 191.879C346.509 187.278 349.694 182.525 352.506 177.547V238.064L351.703 237.832L349.822 244.369L352.506 245.141V253.111L347.705 251.729L345.824 258.266L352.506 260.188V268.157L343.706 265.625L343.008 268.051L328.809 264.492L327.156 271.09L352.506 277.443V283.204L339.707 279.522L337.827 286.058L352.506 290.281V292.392ZM370.001 288.239L352.869 283.309V277.534L370.001 281.829V288.239ZM415.778 286.291L413.803 285.796L377.139 275.246L376.774 276.515L370.364 274.907V265.327L422.962 280.462C420.782 282.674 418.366 284.632 415.778 286.291ZM370.001 274.817L361.754 272.75L362.267 270.966L352.869 268.262V260.292L370.001 265.222V274.817ZM427.669 274.739L370.364 258.25V250.28L431.417 267.848C430.399 270.276 429.136 272.583 427.669 274.739ZM435.104 261.832L370.364 243.203V235.233L440.733 255.482L442.614 248.945L370.364 228.156V220.186L496.177 256.389H468.482L457.487 253.225L456.577 256.389H447.054C442.619 256.389 438.235 258.484 435.104 261.832ZM370.001 258.145L352.869 253.215V245.245L370.001 250.175V258.145ZM544.622 256.389H520.774L370.364 213.109V192.969L435.661 211.758L440.227 195.89L370.364 175.788V88.0759L375.786 69.236L427.909 82.3014C418.315 84.9648 409.938 90.5503 403.793 98.0359C395.632 103.076 389.244 111.053 386.381 120.999C380.274 142.221 392.532 164.385 413.756 170.492C416.248 171.209 418.753 171.673 421.242 171.899C427.188 174.558 433.774 176.036 440.708 176.036H443.644C470.007 176.036 491.378 154.665 491.378 128.301C491.378 115.226 486.122 103.38 477.607 94.759L527.207 107.191V212.847H555.537L544.622 256.389ZM449.518 198.564L444.952 214.432L492.721 228.178L497.287 212.311L449.518 198.564ZM370.001 243.098L352.869 238.168V176.898C353.83 175.169 354.749 173.411 355.634 171.623C358.535 168.958 361.339 163.323 361.339 163.323L367.274 158.373L361.857 151.731L352.869 155.752V148.876L370.001 89.3378V175.684L369.619 175.573L365.054 191.441L370.001 192.865V213.004L359.701 210.04L357.82 216.576L370.001 220.081V228.051L355.701 223.937L353.822 230.473L370.001 235.128V243.098ZM347.083 168.983L352.506 150.139V155.915L351.714 156.27L348.137 167.704C347.788 168.13 347.436 168.556 347.083 168.983Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M352.869 292.392H352.506V290.281L352.869 290.386V292.392ZM352.869 283.309L352.506 283.204V277.443L352.869 277.534V283.309ZM352.869 268.262L352.506 268.157V260.188L352.869 260.292V268.262ZM352.869 253.215L352.506 253.111V245.141L352.869 245.245V253.215ZM352.869 238.168L352.506 238.064V177.547C352.628 177.331 352.749 177.116 352.869 176.898V238.168ZM352.506 155.915V150.139L352.869 148.875V155.752L352.506 155.915Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M370.364 288.343L370.001 288.239V281.829L370.364 281.919V288.343ZM370.364 274.907L370.001 274.817V265.222L370.364 265.327V274.907ZM370.364 258.25L370.001 258.145V250.175L370.364 250.28V258.25ZM370.364 243.203L370.001 243.098V235.128L370.364 235.233V243.203ZM370.364 228.156L370.001 228.051V220.081L370.364 220.186V228.156ZM370.364 213.109L370.001 213.004V192.865L370.364 192.969V213.109ZM370.364 175.788L370.001 175.684V89.3378L370.364 88.0759V175.788Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M555.537 212.847H527.207V107.191L536.985 109.642V203.068H557.988L555.537 212.847Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M557.988 203.068H536.985V109.642L578.779 120.118L577.809 123.985H563.28V144.359H572.703L570.063 154.893H563.28V175.266H564.956L557.988 203.068Z"
      fill="#D5E2F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M572.703 144.359H563.28V123.985H577.809L572.703 144.359Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M564.956 175.266H563.28V154.893H570.063L564.956 175.266Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M443.644 176.036H440.708C467.07 176.036 488.443 154.665 488.443 128.301C488.443 114.721 482.77 102.463 473.666 93.7705L477.607 94.7591C486.122 103.38 491.378 115.226 491.378 128.301C491.378 154.665 470.007 176.036 443.644 176.036Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M440.708 176.036C433.774 176.036 427.188 174.558 421.242 171.899C422.446 172.009 423.642 172.062 424.836 172.062C434.14 172.062 443.049 168.788 450.09 163.056C465.416 158.929 476.697 144.931 476.697 128.301C476.697 108.425 460.583 92.3109 440.708 92.3109C438.251 92.3109 435.851 92.5566 433.534 93.0262C430.612 92.3705 427.685 92.055 424.795 92.055C417.277 92.055 410.018 94.1921 403.793 98.036C409.938 90.5503 418.315 84.9648 427.909 82.3014L473.666 93.7705C482.77 102.463 488.443 114.721 488.443 128.301C488.443 154.665 467.07 176.036 440.708 176.036Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M450.089 163.056C456.2 158.084 460.904 151.26 463.248 143.118C469.357 121.887 457.104 99.734 435.873 93.6251C435.093 93.3998 434.314 93.202 433.533 93.0261C435.851 92.5565 438.251 92.3109 440.708 92.3109C460.583 92.3109 476.697 108.425 476.697 128.301C476.697 144.931 465.415 158.929 450.089 163.056Z"
      fill="#D5E2F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M404.299 291.314C404.11 290.957 403.949 290.622 403.806 290.302L405.977 290.845C405.42 291.016 404.86 291.171 404.299 291.314Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M339.477 195.415L347.083 168.983C347.436 168.556 347.788 168.13 348.137 167.704L348.006 168.122L352.517 172.927C352.673 172.969 352.83 172.99 352.991 172.99C353.827 172.99 354.736 172.449 355.634 171.623C354.749 173.411 353.83 175.169 352.869 176.898C352.748 177.116 352.628 177.331 352.506 177.547C349.694 182.525 346.509 187.278 342.695 191.879C341.663 193.064 340.611 194.252 339.477 195.415Z"
      fill="#D3E1F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M352.991 172.99C352.83 172.99 352.673 172.969 352.517 172.927L348.006 168.122L348.137 167.704L351.713 156.27L361.339 163.323C361.339 163.323 358.535 168.958 355.634 171.623C354.736 172.449 353.827 172.99 352.991 172.99Z"
      fill="#D3E1F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M361.339 163.323L351.713 156.27L352.506 155.915L352.869 155.752L361.857 151.731L367.273 158.373L361.339 163.323Z"
      fill="#D3E1F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M530.523 312.642H497.335C496.875 312.259 496.39 311.895 495.886 311.556C515.284 309.522 526.794 304.924 533.624 300.269L530.523 312.642ZM536.891 287.236H517.654C516.677 282.633 512.59 279.18 507.697 279.18C505.248 279.18 503.002 280.044 501.246 281.483C500.428 275.08 494.956 270.13 488.329 270.13C484.519 270.13 481.089 271.769 478.708 274.378L435.104 261.832C438.235 258.484 442.619 256.389 447.054 256.389H456.576L455.607 259.762L513.745 276.491L515.626 269.954L468.482 256.389H496.177L532.608 266.871L534.487 260.334L520.774 256.389H544.622L536.891 287.236ZM431.772 287.236H419.545L415.778 286.291C418.366 284.632 420.782 282.674 422.962 280.462L431.901 283.034C431.744 283.844 431.661 284.68 431.661 285.535C431.661 286.11 431.699 286.679 431.772 287.236ZM456.635 280.352C454.631 275.739 450.034 272.513 444.684 272.513C440.832 272.513 437.369 274.186 434.985 276.844L427.669 274.739C429.136 272.583 430.399 270.276 431.417 267.848L462.555 276.808C460.266 277.443 458.231 278.686 456.635 280.352Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M527.096 326.31H503.502L502.33 320.406C501.685 317.446 499.852 314.736 497.335 312.642H530.523L527.096 326.31Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M513.923 378.863L505.062 334.182L512.613 336.354L514.493 329.818L503.574 326.675L503.502 326.31H527.096L513.923 378.863Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M497.738 287.236H478.89C478.472 284.693 477.319 282.399 475.656 280.577L489.547 284.575L491.427 278.039L478.708 274.378C481.089 271.769 484.519 270.13 488.329 270.13C494.956 270.13 500.428 275.08 501.246 281.483C499.493 282.921 498.227 284.934 497.738 287.236Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M517.654 287.236H497.738C498.227 284.934 499.493 282.921 501.246 281.483C503.002 280.044 505.248 279.18 507.697 279.18C512.59 279.18 516.677 282.633 517.654 287.236Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M478.889 287.236H471.096L457.52 283.329C457.343 282.29 457.042 281.293 456.635 280.352C458.231 278.686 460.266 277.443 462.554 276.808L475.656 280.577C477.319 282.399 478.472 284.693 478.889 287.236Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M446.5 287.236H431.772C431.699 286.679 431.661 286.11 431.661 285.535C431.661 284.68 431.744 283.844 431.901 283.034L446.5 287.236ZM457.52 283.329L434.985 276.844C437.369 274.186 440.832 272.513 444.684 272.513C450.034 272.513 454.631 275.739 456.635 280.352C457.042 281.293 457.343 282.29 457.52 283.329Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M495.886 311.556C494.113 310.36 492.095 309.448 489.968 308.921L490.919 305.125L419.545 287.236H431.772H446.5L506.432 304.481L508.312 297.944L471.096 287.236H478.89H497.738H517.654H536.891L533.624 300.269C526.794 304.924 515.284 309.522 495.886 311.556Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M347.939 312.642H343.373L331.185 309.136L330.176 312.642H306.774C306.671 311.812 306.567 310.975 306.463 310.145L311.572 292.392H352.505V300.246L321.778 292.544L320.123 299.141L352.505 307.257V309.313C350.615 310.046 349.05 311.19 347.939 312.642ZM352.869 309.179V307.349L357.104 308.41C355.577 308.46 354.153 308.726 352.869 309.179ZM415.476 308.402H385.046L370.364 304.722V296.828L408.268 306.328L415.476 308.402ZM370.001 304.63L352.869 300.337V292.392H357.682L357.386 293.574L370.001 296.736V304.63Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M352.506 309.313V307.258L352.869 307.349V309.179C352.746 309.222 352.625 309.267 352.506 309.313ZM352.869 300.337L352.506 300.246V292.392H352.869V300.337Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M370.364 304.722L370.001 304.631V296.736L370.364 296.828V304.722Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M313.314 326.31H308.431C307.899 321.804 307.343 317.229 306.775 312.642H330.177L326.48 325.493L314.285 322.437L313.314 326.31ZM347.214 313.749L343.373 312.642H347.939C347.67 312.994 347.428 313.363 347.214 313.749Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M310.017 339.465H309.937C309.466 335.201 308.96 330.792 308.431 326.31H313.314L310.017 339.465Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M309.937 339.465H298.027L306.464 310.145C306.567 310.975 306.671 311.812 306.775 312.642C307.343 317.229 307.898 321.804 308.431 326.31C308.96 330.792 309.466 335.201 309.937 339.465Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M413.282 300.573L410.033 299.759L384.433 292.392H395.803C398.664 292.392 401.515 292.019 404.299 291.314C405.636 293.843 408.237 297.236 413.282 300.573Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M476.017 308.402H441.611L441.782 307.717L413.282 300.573C408.237 297.236 405.636 293.843 404.299 291.314C404.86 291.171 405.42 291.016 405.977 290.845L412.023 292.362L457.235 305.37L457.684 303.808L476.017 308.402Z"
      fill="#D4E3F5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M424.836 172.062C423.642 172.062 422.446 172.008 421.242 171.899C418.753 171.673 416.248 171.209 413.756 170.492C392.532 164.385 380.274 142.221 386.381 120.999C389.244 111.053 395.632 103.076 403.793 98.0359C410.018 94.1921 417.277 92.055 424.795 92.055C427.685 92.055 430.612 92.3705 433.534 93.0261C434.314 93.202 435.094 93.3998 435.873 93.6251C457.104 99.734 469.357 121.887 463.248 143.118C460.905 151.26 456.2 158.084 450.09 163.056C443.049 168.788 434.14 172.062 424.836 172.062ZM424.798 100.363C411.035 100.363 398.36 109.403 394.364 123.296C389.526 140.112 399.236 157.671 416.053 162.509C418.981 163.353 421.929 163.754 424.831 163.754C438.599 163.754 451.27 154.71 455.265 140.821C460.105 123.999 450.399 106.448 433.576 101.608C430.648 100.765 427.7 100.363 424.798 100.363Z"
      fill="#C4D7F1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M424.831 163.754C421.929 163.754 418.981 163.353 416.053 162.509C399.235 157.671 389.525 140.112 394.364 123.296C398.36 109.403 411.035 100.363 424.798 100.363C427.7 100.363 430.648 100.765 433.576 101.608C450.399 106.448 460.105 123.999 455.265 140.821C451.27 154.71 438.599 163.754 424.831 163.754Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M435.661 211.758L370.364 192.969L370.001 192.865L365.054 191.442L369.619 175.573L370.001 175.684L370.364 175.788L440.227 195.89L435.661 211.758Z"
      fill="#C4D7F1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M341.948 329.37L326.48 325.493L330.177 312.642L331.186 309.136L343.373 312.642L347.214 313.749C346.56 314.929 346.17 316.265 346.1 317.715V317.716C345.887 322.117 344.412 326.074 341.948 329.37Z"
      fill="#C4D7F1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M492.721 228.178L444.952 214.432L449.518 198.564L497.287 212.311L492.721 228.178Z"
      fill="#C4D7F1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M532.608 266.871L496.177 256.389L370.364 220.186L370.001 220.081L357.819 216.576L359.701 210.04L370.001 213.004L370.364 213.109L520.774 256.389L534.487 260.334L532.608 266.871Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M440.733 255.482L370.364 235.233L370.001 235.128L353.822 230.473L355.701 223.937L370.001 228.051L370.364 228.156L442.614 248.945L440.733 255.482Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M513.745 276.491L455.607 259.762L456.577 256.389L457.487 253.225L468.482 256.389L515.626 269.954L513.745 276.491Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M489.547 284.575L475.656 280.577L462.554 276.808L431.417 267.848L370.364 250.28L370.001 250.175L352.869 245.245L352.506 245.141L349.822 244.369L351.703 237.832L352.506 238.064L352.869 238.168L370.001 243.098L370.364 243.203L435.104 261.832L478.708 274.378L491.427 278.039L489.547 284.575Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M506.432 304.481L446.5 287.236L431.901 283.034L422.962 280.462L370.364 265.327L370.001 265.222L352.869 260.292L352.506 260.188L345.824 258.266L347.705 251.729L352.506 253.111L352.869 253.215L370.001 258.145L370.364 258.25L427.669 274.739L434.985 276.844L457.52 283.329L471.096 287.236L508.312 297.944L506.432 304.481Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M361.753 272.75L343.008 268.051L343.706 265.625L352.506 268.157L352.869 268.262L362.267 270.966L361.753 272.75Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M457.235 305.37L412.023 292.362L457.684 303.808L457.235 305.37ZM413.803 285.796L376.774 276.515L377.139 275.246L413.803 285.796Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M512.613 336.354L505.062 334.182L503.574 326.675L514.493 329.818L512.613 336.354ZM416.543 308.402H415.476L408.268 306.328L416.543 308.402ZM410.033 299.759L359.039 286.977L357.827 291.814L352.869 290.386L352.506 290.281L337.827 286.058L339.706 279.522L352.506 283.204L352.869 283.309L370.001 288.239L370.364 288.343L384.433 292.392L410.033 299.759Z"
      fill="#D7E5F6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M392.012 181.019C370.59 175.649 357.572 153.923 362.941 132.503C368.313 111.072 390.036 98.0621 411.458 103.432C432.888 108.804 445.898 130.52 440.528 151.949C435.158 173.371 413.441 186.39 392.012 181.019Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M394.031 172.962C377.058 168.707 366.744 151.495 370.998 134.522C375.253 117.543 392.467 107.236 409.438 111.489C426.419 115.745 436.726 132.95 432.471 149.929C428.217 166.903 411.01 177.217 394.031 172.962Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M415.331 221.503L344.062 203.639L348.076 187.624L419.345 205.487L415.331 221.503Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M337.966 394.551L298.679 384.705L314.285 322.437L353.573 332.283L337.966 394.551Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M476.986 429.398L437.699 419.549L453.307 357.282L492.594 367.13L476.986 429.398Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M407.476 411.974L368.188 402.127L383.796 339.859L423.084 349.707L407.476 411.974Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M472.926 235.94L424.709 223.854L428.723 207.838L476.94 219.923L472.926 235.94Z"
      fill="#4D6DBE"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M514.126 273.23L337.703 229.009L339.356 222.412L515.779 266.632L514.126 273.23Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M421.912 265.024L334.188 243.036L335.841 236.438L423.566 258.427L421.912 265.024Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M495.605 283.496L436.924 268.787L438.578 262.19L497.26 276.899L495.605 283.496Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M471.703 292.413L330.671 257.063L332.325 250.465L473.358 285.815L471.703 292.413Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M489.265 311.722L327.156 271.09L328.809 264.492L490.918 305.125L489.265 311.722Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M342.374 289.81L323.641 285.116L325.294 278.519L344.029 283.214L342.374 289.81Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M440.128 314.314L357.386 293.574L359.039 286.977L441.783 307.717L440.128 314.314Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M496.546 343.363L320.124 299.141L321.778 292.544L498.2 336.764L496.546 343.363Z"
      fill="white"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M191.17 512.209L186.157 486.437H201.442L197.175 511.945C195.152 512.032 193.151 512.119 191.17 512.209ZM201.503 486.074H186.087L184.206 476.406H203.121L201.503 486.074ZM203.182 476.043H184.135L171.524 411.205H208.623V443.527L203.182 476.043ZM208.623 410.841H171.453L159.904 351.468C158.458 344.838 163.514 339.465 171.197 339.465H208.623V410.841Z"
      fill="#B5D2F0"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M203.121 476.406H184.206L184.135 476.043H203.182L203.121 476.406Z"
      fill="#93B5E3"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M201.442 486.437H186.157L186.087 486.074H201.503L201.442 486.437Z"
      fill="#93B5E3"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M208.623 411.205H171.524L171.453 410.841H208.623V411.205Z"
      fill="#93B5E3"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M208.623 443.527V339.465H221.544V366.291L208.623 443.527Z"
      fill="#ACCBED"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M221.544 366.291V339.465H226.032L221.544 366.291Z"
      fill="#A1C0E8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M529.486 526.281H208.105C200.422 526.281 193.019 520.907 191.572 514.278L191.17 512.209C193.151 512.119 195.152 512.032 197.175 511.945L197.104 512.368C195.819 520.053 201.006 526.281 208.689 526.281H529.486Z"
      fill="#AAC9EC"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M540.412 512.424C492.033 510.143 430.476 508.777 363.451 508.777C328.893 508.777 295.778 509.14 265.183 509.804C265.083 509.677 264.95 509.579 264.79 509.517C264.648 509.461 264.487 509.437 264.309 509.437C263.835 509.437 263.255 509.614 262.677 509.86C262.485 509.864 262.283 509.87 262.091 509.874C262.579 509.097 262.905 508.26 262.783 507.683C262.693 507.253 262.368 506.983 261.873 506.923C261.807 506.914 261.745 506.91 261.682 506.91C261.349 506.91 261.056 507.034 260.807 507.272C260.231 507.828 260.028 508.961 259.967 509.923C259.558 509.931 259.148 509.941 258.741 509.95L259.504 496.34H264.745L265.929 488.846L264.582 488.915C264.648 488.14 264.718 487.316 264.792 486.437H267.992V486.074H264.822C264.949 484.583 265.087 482.951 265.235 481.193H271.004V476.406H533.269L540.412 512.424ZM299.807 494.362V494.726H332.599V494.362H299.807ZM491.171 492.273V492.636H506.409V492.273H491.171ZM366.313 486.074V486.437H391.074V486.074H366.313ZM197.175 511.945L201.442 486.437H227.413L226.48 487.41L226.484 487.415L220.221 493.937L219.125 493.199C218.939 493.074 218.729 493.012 218.527 493.012C218.306 493.012 218.096 493.086 217.936 493.233L209.996 501.246C209.291 501.896 209.522 503.015 210.38 503.675C213.943 506.42 216.976 508.803 219.605 511.079C211.882 511.347 204.398 511.637 197.175 511.945ZM234.51 510.597C233.596 508.955 233.356 507.115 232.41 504.679C233.734 505.365 235.329 506.035 236.492 506.035C236.781 506.035 237.044 505.993 237.27 505.9C237.665 505.737 237.924 505.434 238.037 504.999C238.107 504.737 238.052 504.488 237.879 504.282C237.329 503.622 235.47 503.441 233.846 503.418C235.019 502.989 236.083 502.369 236.222 501.718C236.283 501.436 236.21 501.029 235.525 500.704C235.202 500.548 234.888 500.481 234.586 500.481C233.254 500.481 232.155 501.793 231.54 502.726C231.487 502.617 231.43 502.506 231.372 502.396C230.989 501.665 230.501 500.977 229.855 500.448L237.566 492.417L240.792 495.451L241.665 496.273L243.145 494.684L243.414 496.34H248.72L248.544 499.443H248.553L247.948 510.219C243.408 510.338 238.92 510.464 234.51 510.597ZM227.762 486.074H201.503L203.121 476.406H208.623V481.193H225.28H225.639L229.216 484.559L227.762 486.074ZM533.196 476.043H271.004V471.584H532.312L533.196 476.043ZM208.623 476.043H203.182L208.623 443.527V476.043Z"
      fill="#7B9FD9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M533.269 476.406H271.004V476.043H533.196L533.269 476.406ZM208.623 476.406H203.121L203.182 476.043H208.623V476.406Z"
      fill="#789DD8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M491.171 492.637H506.409V492.273H491.171V492.637Z"
      fill="#789DD8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M267.992 486.437H264.792C264.802 486.318 264.812 486.196 264.822 486.074H267.992V486.437ZM227.413 486.437H201.442L201.503 486.074H227.762L227.413 486.437Z"
      fill="#789DD8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M366.312 486.437H391.074V486.074H366.312V486.437Z"
      fill="#789DD8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M299.807 494.726H332.599V494.362H299.807V494.726Z"
      fill="#789DD8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M271.004 481.193H265.235C265.479 478.308 265.751 475.081 266.044 471.584H271.004V476.043V476.406V481.193ZM225.639 481.193H225.28L225.98 480.074L225.562 481.121L225.639 481.193ZM230.14 475.482L229.32 474.734L231.292 471.584H232.321C231.527 473.016 230.797 474.319 230.14 475.482Z"
      fill="#789DD8"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M225.281 481.193H208.623V453.278V471.584H231.292L229.321 474.734L228.432 473.926L225.98 480.074L225.281 481.193Z"
      fill="#7B9FDA"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M532.313 471.584H266.044C266.407 467.25 266.804 462.501 267.224 457.453H482.3L493.521 460.265L494.226 457.453H529.51L532.313 471.584ZM232.321 471.584H231.292H208.623V453.278V443.527L221.544 366.291V384.815H244.161C244.202 389.342 244.235 394.08 244.261 398.948H221.544V457.453H239.958C239.486 458.349 239.02 459.228 238.564 460.087V460.09C236.239 464.466 234.117 468.352 232.321 471.584Z"
      fill="#7B9FDA"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M244.161 384.815H221.544V366.291L226.032 339.465H243.085C243.283 344.657 243.459 349.453 243.609 353.663C243.872 361.031 244.046 372.074 244.161 384.815Z"
      fill="#7A9ED9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M529.51 457.453H494.226L496.01 450.337L498.003 450.911L505.547 453.082L519.22 405.565L529.51 457.453ZM482.3 457.453H267.224C267.256 457.063 267.29 456.665 267.322 456.273C276.353 442.188 286.215 425.929 294.373 410.348L482.3 457.453ZM239.958 457.453H221.544V398.948H244.261C244.351 415.322 244.366 433.121 244.35 448.969C242.84 451.937 241.368 454.772 239.958 457.453Z"
      fill="#7A9ED9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M529.486 526.281H208.689C201.006 526.281 195.819 520.053 197.104 512.368L197.175 511.945C204.398 511.637 211.882 511.347 219.604 511.079C221.862 513.035 223.822 514.912 225.565 516.875C229.974 521.836 232.289 522.535 242.466 522.535C243.861 522.535 245.078 522.187 246.048 521.681C246.394 522.172 246.972 522.517 247.583 522.517C247.592 522.517 247.6 522.517 247.609 522.517C251.825 522.444 253.839 522.195 259.164 522.195C262.439 522.195 276.367 522.535 280.891 522.535C285.315 522.535 285.286 518.062 283.368 517.658C276.219 516.146 267.644 514.158 263.21 512.158C263.976 512.14 264.662 511.987 265.061 511.591C265.398 511.257 265.503 510.799 265.376 510.229C265.338 510.063 265.274 509.923 265.183 509.804C295.778 509.14 328.893 508.777 363.451 508.777C430.476 508.777 492.033 510.143 540.411 512.424L540.779 514.278C542.226 520.907 537.169 526.281 529.486 526.281ZM245.924 517.314C238.353 514.762 235.781 512.873 234.51 510.597C238.92 510.464 243.408 510.338 247.948 510.219L247.945 510.284H247.109C246.669 510.284 246.336 510.588 246.309 511.019L245.924 517.314ZM259.946 510.38C259.705 510.316 259.461 510.284 259.218 510.284H258.722L258.741 509.95C259.148 509.941 259.558 509.931 259.966 509.923C259.956 510.081 259.949 510.235 259.946 510.38ZM261.823 510.27C261.916 510.141 262.005 510.008 262.09 509.874C262.282 509.87 262.484 509.864 262.676 509.86C262.387 509.983 262.098 510.124 261.823 510.27Z"
      fill="#7A9FDA"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M229.856 500.448C229.745 500.358 229.632 500.272 229.512 500.192L220.221 493.938L226.484 487.415L235.03 495.06L237.567 492.416V492.417L229.856 500.448Z"
      fill="#7697D5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M258.722 510.284H247.945L247.948 510.219L248.553 499.443H259.327L259.503 496.34H259.505L258.741 509.95L258.722 510.284Z"
      fill="#7697D5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M280.891 522.535C276.367 522.535 262.44 522.195 259.164 522.195C253.839 522.195 251.825 522.444 247.609 522.517C247.601 522.517 247.592 522.517 247.583 522.517C246.973 522.517 246.394 522.172 246.048 521.681C248.349 520.479 249.267 518.391 247.917 517.965C247.217 517.743 246.552 517.525 245.924 517.314L246.31 511.019C246.336 510.588 246.669 510.284 247.109 510.284H247.945H258.722H259.218C259.461 510.284 259.705 510.316 259.946 510.38C259.93 511.019 259.968 511.503 259.972 511.554L259.981 511.565L259.977 511.578L260.02 511.625L260.108 511.754L260.157 511.767L260.166 511.776C260.941 511.956 262.043 512.161 263.037 512.161C263.095 512.161 263.153 512.159 263.21 512.158C267.644 514.158 276.219 516.146 283.369 517.658C285.286 518.062 285.315 522.535 280.891 522.535Z"
      fill="#6B8ED1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M242.466 522.535C232.289 522.535 229.975 521.836 225.565 516.875C223.822 514.912 221.862 513.035 219.605 511.079C216.976 508.803 213.943 506.42 210.38 503.675C209.522 503.015 209.291 501.896 209.996 501.246L217.936 493.233C218.096 493.086 218.306 493.012 218.527 493.012C218.729 493.012 218.939 493.074 219.125 493.199L220.221 493.938L229.512 500.192C229.631 500.272 229.745 500.358 229.855 500.448C230.501 500.977 230.989 501.665 231.372 502.396C231.43 502.507 231.487 502.617 231.54 502.726C231.225 503.206 231.037 503.587 231.013 503.636L231.016 503.671L230.995 503.688L231.02 503.748L231.029 503.882L231.093 503.918L231.111 503.962C231.488 504.183 231.931 504.431 232.41 504.679C233.356 507.115 233.596 508.955 234.51 510.597C235.781 512.873 238.353 514.762 245.924 517.314C246.552 517.525 247.217 517.743 247.917 517.965C249.267 518.391 248.349 520.479 246.048 521.681C245.078 522.187 243.861 522.535 242.466 522.535Z"
      fill="#6B8ED1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M235.029 495.06L226.484 487.415L226.479 487.41L227.413 486.437L227.762 486.074L229.216 484.559L233.613 488.697L237.566 492.416L235.029 495.06Z"
      fill="#7595D4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M259.327 499.443H248.544L248.72 496.34H259.503L259.327 499.443Z"
      fill="#7595D4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M240.792 495.451L237.566 492.417V492.416L233.614 488.697L240.792 495.451ZM240.103 484.559L230.14 475.482C230.798 474.319 231.527 473.016 232.321 471.584C234.117 468.352 236.239 464.466 238.564 460.09L240.103 484.559ZM267.321 456.273C267.323 456.265 267.323 456.264 267.323 456.257C269.537 452.804 271.802 449.222 274.08 445.549C276.462 432.038 278.253 419.041 279.557 406.634L294.372 410.348C286.215 425.929 276.353 442.188 267.321 456.273Z"
      fill="#6B8ED1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M244.247 488.335L240.104 484.559L238.564 460.09V460.087C239.02 459.228 239.486 458.349 239.958 457.453C241.368 454.772 242.84 451.937 244.35 448.969C244.333 465.48 244.282 479.872 244.247 488.335ZM267.323 456.257C268.63 440.525 270.142 422.079 271.522 404.62L279.557 406.634C278.253 419.041 276.462 432.038 274.08 445.549C271.802 449.222 269.537 452.804 267.323 456.257Z"
      fill="#6B90D2"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M241.665 496.273L240.792 495.451L233.613 488.697L229.216 484.559L225.639 481.193L225.562 481.121L225.979 480.074L228.432 473.926L229.32 474.734L230.14 475.482L240.103 484.559L244.247 488.335C244.244 488.89 244.242 489.422 244.239 489.927L242.386 490.018L243.145 494.684L241.665 496.273Z"
      fill="#7599D7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M263.042 511.66C262.752 511.66 262.435 511.641 262.092 511.605C261.804 511.446 261.546 511.286 261.319 511.128C262.347 510.518 263.575 509.937 264.298 509.937C264.415 509.937 264.52 509.952 264.609 509.986C264.757 510.043 264.844 510.157 264.886 510.339C264.975 510.735 264.917 511.029 264.708 511.235C264.423 511.518 263.843 511.66 263.042 511.66Z"
      fill="#7A9FDA"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M262.092 511.605C261.71 511.564 261.297 511.5 260.856 511.413C261.005 511.318 261.159 511.224 261.319 511.128C261.546 511.286 261.804 511.446 262.092 511.605Z"
      fill="#6B8ED1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M260.47 509.911C260.531 509.02 260.714 508.06 261.156 507.634C261.31 507.488 261.487 507.413 261.695 507.413L261.813 507.421C262.178 507.464 262.261 507.639 262.291 507.787C262.395 508.269 262.011 509.123 261.48 509.887C261.146 509.895 260.804 509.903 260.47 509.911Z"
      fill="#7B9FD9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M260.784 510.744C260.673 510.676 260.56 510.614 260.443 510.56C260.446 510.354 260.455 510.134 260.47 509.911C260.804 509.903 261.146 509.895 261.48 509.887C261.265 510.197 261.025 510.494 260.784 510.744Z"
      fill="#7A9FDA"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M260.448 511.06C260.444 510.907 260.442 510.739 260.444 510.56C260.56 510.614 260.673 510.676 260.784 510.744C260.672 510.859 260.559 510.965 260.448 511.06Z"
      fill="#6B8ED1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M236.488 505.534C235.53 505.534 233.98 504.975 232.113 503.953C232.112 503.952 232.112 503.949 232.11 503.947C232.519 503.93 232.952 503.919 233.391 503.919C235.191 503.919 237.065 504.087 237.494 504.601L237.552 504.872C237.479 505.15 237.324 505.334 237.078 505.436C236.918 505.503 236.72 505.534 236.488 505.534Z"
      fill="#7B9FD9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M232.114 503.953C232.11 503.952 232.106 503.95 232.102 503.947C232.105 503.947 232.108 503.947 232.111 503.947C232.113 503.949 232.113 503.952 232.114 503.953Z"
      fill="#6B8ED1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M273.628 377.27C274.436 366.404 275.083 357.071 275.45 350.601C275.541 349.002 275.624 347.266 275.7 345.408C275.982 347.713 276.239 349.912 276.465 351.982C277.225 358.933 276.055 367.651 273.628 377.27Z"
      fill="#7A9ED9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M282.521 352.592C282.536 348.077 282.489 343.694 282.39 339.465H285.811L282.521 352.592Z"
      fill="#6B8ED1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M272.449 392.776C272.868 387.378 273.263 382.168 273.628 377.27C276.055 367.652 277.225 358.933 276.465 351.982C276.239 349.912 275.982 347.713 275.7 345.408C275.777 343.543 275.847 341.553 275.909 339.465H282.39C282.489 343.694 282.536 348.077 282.521 352.592L272.449 392.776Z"
      fill="#6B90D2"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M244.24 489.927C244.242 489.422 244.244 488.89 244.247 488.335C244.282 479.872 244.333 465.48 244.35 448.969C244.366 433.121 244.351 415.322 244.261 398.948C244.235 394.08 244.202 389.342 244.161 384.815C244.046 372.074 243.872 361.031 243.609 353.663C243.459 349.453 243.283 344.657 243.085 339.465H275.909C275.847 341.553 275.777 343.543 275.7 345.408C275.624 347.266 275.541 349.002 275.45 350.601C275.083 357.071 274.437 366.404 273.628 377.27C273.263 382.168 272.868 387.378 272.449 392.776L269.601 404.139L271.522 404.62C270.142 422.079 268.63 440.525 267.323 456.257C267.323 456.264 267.323 456.265 267.322 456.273C267.29 456.665 267.256 457.063 267.224 457.453C266.804 462.501 266.407 467.25 266.044 471.584C265.751 475.081 265.48 478.308 265.235 481.193C265.087 482.951 264.949 484.583 264.822 486.074C264.812 486.196 264.802 486.318 264.792 486.438C264.718 487.316 264.648 488.14 264.583 488.915L244.24 489.927Z"
      fill="#6B8ED1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M264.746 496.34H243.414L243.145 494.684L242.386 490.018L244.24 489.927L264.583 488.915L265.929 488.846L264.746 496.34Z"
      fill="#7599D7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M263.037 512.161C262.043 512.161 260.941 511.956 260.166 511.776L260.157 511.767L260.223 511.783L260.352 511.747C260.807 511.476 261.358 510.915 261.823 510.27C262.098 510.124 262.387 509.983 262.677 509.86C263.255 509.614 263.835 509.437 264.309 509.437C264.487 509.437 264.648 509.462 264.791 509.517C264.951 509.579 265.083 509.677 265.183 509.804C265.275 509.923 265.339 510.063 265.376 510.229C265.503 510.799 265.398 511.257 265.061 511.591C264.663 511.987 263.976 512.14 263.21 512.158C263.154 512.16 263.095 512.161 263.037 512.161ZM262.092 511.605C262.435 511.641 262.752 511.66 263.042 511.66C263.843 511.66 264.423 511.518 264.708 511.235C264.917 511.029 264.975 510.735 264.887 510.339C264.844 510.157 264.757 510.043 264.609 509.986C264.52 509.952 264.416 509.937 264.298 509.937C263.575 509.937 262.347 510.518 261.319 511.128C261.159 511.224 261.005 511.318 260.857 511.413C261.297 511.5 261.71 511.564 262.092 511.605ZM260.021 511.625L259.977 511.578L259.981 511.565L260.021 511.625Z"
      fill="#7193D3"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M260.223 511.783L260.157 511.767L260.108 511.754L260.02 511.625L259.981 511.565L259.972 511.554C259.968 511.502 259.93 511.019 259.946 510.38C259.949 510.235 259.956 510.081 259.967 509.923C260.028 508.961 260.231 507.828 260.807 507.272C261.056 507.034 261.349 506.91 261.682 506.91C261.745 506.91 261.807 506.914 261.873 506.923C262.368 506.983 262.693 507.253 262.783 507.683C262.905 508.26 262.579 509.097 262.091 509.874C262.005 510.008 261.916 510.141 261.823 510.27C261.358 510.915 260.807 511.476 260.352 511.747L260.223 511.783ZM260.443 510.56C260.442 510.739 260.443 510.907 260.448 511.06C260.558 510.965 260.672 510.858 260.784 510.744C261.025 510.494 261.265 510.197 261.48 509.887C262.011 509.123 262.395 508.269 262.291 507.787C262.261 507.639 262.178 507.464 261.813 507.42L261.695 507.413C261.487 507.413 261.31 507.488 261.156 507.634C260.714 508.06 260.531 509.02 260.47 509.911C260.455 510.134 260.446 510.354 260.443 510.56Z"
      fill="#7193D3"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M236.492 506.035C235.329 506.035 233.734 505.365 232.41 504.679C231.931 504.431 231.488 504.183 231.111 503.962L231.093 503.918L231.239 503.997H231.244C231.904 503.982 232.91 503.761 233.846 503.418C235.47 503.441 237.329 503.622 237.879 504.282C238.052 504.488 238.107 504.737 238.037 505C237.924 505.435 237.665 505.737 237.27 505.9C237.044 505.993 236.781 506.035 236.492 506.035ZM232.113 503.953C233.98 504.975 235.53 505.535 236.488 505.535C236.72 505.535 236.918 505.503 237.078 505.436C237.324 505.334 237.479 505.15 237.552 504.872L237.494 504.601C237.065 504.087 235.191 503.92 233.391 503.92C232.952 503.92 232.519 503.93 232.11 503.947C232.107 503.947 232.104 503.947 232.101 503.947C232.106 503.95 232.109 503.952 232.113 503.953ZM231.02 503.748L230.995 503.688L231.015 503.671L231.02 503.748Z"
      fill="#7193D3"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M231.881 503.43C231.855 503.373 231.827 503.315 231.801 503.258C232.317 502.418 233.375 500.99 234.602 500.99C234.832 500.99 235.069 501.041 235.309 501.154C235.623 501.305 235.764 501.458 235.73 501.614C235.591 502.27 233.423 503.179 231.881 503.43Z"
      fill="#7B9FD9"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M231.68 503.459C231.716 503.398 231.757 503.329 231.801 503.258C231.827 503.315 231.854 503.373 231.881 503.43C231.812 503.441 231.745 503.45 231.68 503.459Z"
      fill="#6B8ED1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M231.244 503.997H231.239L231.093 503.918L231.029 503.882L231.02 503.748L231.016 503.671L231.013 503.636C231.037 503.587 231.225 503.206 231.54 502.726C232.155 501.793 233.254 500.481 234.586 500.481C234.889 500.481 235.203 500.548 235.525 500.704C236.21 501.029 236.283 501.437 236.222 501.718C236.084 502.369 235.019 502.989 233.846 503.418C232.91 503.761 231.904 503.982 231.244 503.997ZM231.801 503.258C231.757 503.329 231.716 503.398 231.68 503.459C231.745 503.45 231.812 503.441 231.881 503.43C233.423 503.179 235.591 502.27 235.73 501.614C235.764 501.458 235.623 501.305 235.309 501.154C235.069 501.041 234.832 500.99 234.602 500.99C233.375 500.99 232.317 502.418 231.801 503.258Z"
      fill="#7193D3"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M517.907 398.948H511.543L515.156 385.08L517.907 398.948Z"
      fill="#97B8E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M505.546 453.081L498.003 450.911L511.543 398.948H517.907L519.22 405.565L505.546 453.081Z"
      fill="#97B8E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M498.003 450.911L496.01 450.337L498.003 450.911Z"
      fill="#6F8FD1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M511.543 398.948H508.89L512.432 384.815H515.104L515.156 385.08L511.543 398.948Z"
      fill="#86A8DD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M515.104 384.815H512.432L513.923 378.863L515.104 384.815Z"
      fill="#86A8DD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M498.003 450.911L496.01 450.337L508.89 398.948H511.543L498.003 450.911Z"
      fill="#86A8DD"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M493.521 460.265L482.3 457.453H494.226L493.521 460.265ZM317.417 398.948H300.077C300.782 397.463 301.461 395.999 302.119 394.545L317.417 398.948Z"
      fill="#97B8E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M494.226 457.453H482.3L294.372 410.348C296.392 406.491 298.306 402.677 300.077 398.948H317.417L496.009 450.337L494.226 457.453Z"
      fill="#97B8E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M294.372 410.348L279.557 406.634C281.62 387.031 282.469 368.908 282.521 352.591L285.811 339.465H298.027L283.703 389.246L302.118 394.545C301.461 395.999 300.782 397.463 300.077 398.948C298.306 402.677 296.392 406.491 294.372 410.348Z"
      fill="#95B6E4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M279.557 406.634L271.521 404.62C271.838 400.605 272.15 396.642 272.449 392.776L282.521 352.591C282.469 368.908 281.62 387.031 279.557 406.634Z"
      fill="#95B6E4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M271.522 404.62L269.601 404.139L272.449 392.776C272.15 396.642 271.838 400.605 271.522 404.62Z"
      fill="#95B6E4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M317.417 398.948L302.118 394.545L317.417 398.948Z"
      fill="#96B6E4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M496.01 450.337L317.417 398.948L496.01 450.337Z"
      fill="#95B6E4"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M302.119 394.545L283.703 389.246L302.119 394.545Z"
      fill="#94B4E3"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M430.213 312.642H401.966L385.046 308.402H415.476L430.213 312.642ZM373.989 312.642H370.364V311.734L373.989 312.642ZM370.001 312.642H352.869V309.179C354.153 308.726 355.578 308.46 357.104 308.41L370.001 311.644V312.642ZM352.506 312.642H347.939C349.05 311.19 350.616 310.046 352.506 309.313V312.642Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M352.869 312.642H352.506V309.313C352.625 309.267 352.746 309.222 352.869 309.179V312.642Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M370.364 312.642H370.001V311.644L370.364 311.734V312.642Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M508.89 398.948H496.626L500.694 384.815H512.432L508.89 398.948ZM442.863 398.948H422.059L426.125 384.815H446.406L442.863 398.948ZM411.154 398.948H410.741L410.769 398.836L411.154 398.948ZM368.985 398.948H317.417L302.118 394.545C303.369 391.777 304.529 389.066 305.581 386.435L337.966 394.551L340.406 384.815H372.528L368.985 398.948ZM477.706 326.31H456.489L401.966 312.642H430.213L477.706 326.31ZM428.509 326.31H368.392L370.11 320.336L347.214 313.749C347.428 313.363 347.67 312.994 347.939 312.642H352.506H352.869H370.001H370.364H373.989L428.509 326.31Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M512.432 384.815H500.694L507.842 359.97L468.918 348.769L465.583 360.359L453.307 357.282L446.406 384.815H426.125L438.975 340.153L400.053 328.953L396.031 342.925L383.796 339.859L372.528 384.815H340.406L341.861 379.007L352.358 382.028L368.392 326.31H428.509L496.546 343.363L498.201 336.764L456.489 326.31H477.706L505.062 334.182L513.923 378.863L512.432 384.815ZM309.962 339.689C309.953 339.615 309.944 339.538 309.937 339.465H310.017L309.962 339.689Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M496.01 450.337L317.417 398.948H368.985L368.188 402.127L407.476 411.974L410.741 398.948H411.154L421.224 401.845L422.059 398.948H442.863L437.699 419.549L476.986 429.398L479.676 418.664L490.09 421.662L496.626 398.948H508.89L496.01 450.337Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M302.119 394.545L283.703 389.246L298.027 339.465H309.937C309.944 339.538 309.953 339.615 309.962 339.689L298.679 384.705L305.581 386.435C304.529 389.066 303.369 391.777 302.119 394.545Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M497.335 312.642H473.227C481.774 312.642 489.289 312.247 495.886 311.556C496.39 311.895 496.875 312.259 497.335 312.642ZM473.227 312.642H454.809L451.288 311.629C457.711 312.276 464.988 312.642 473.227 312.642Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M503.503 326.31H502.302L454.809 312.642H473.227H497.336C499.852 314.736 501.685 317.446 502.331 320.406L503.503 326.31Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M503.573 326.674L502.301 326.31H503.502L503.573 326.674Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M473.227 312.642C464.988 312.642 457.71 312.276 451.288 311.629L441.506 308.815L441.611 308.402H476.017L489.265 311.722L489.968 308.921C492.094 309.448 494.112 310.36 495.886 311.556C489.289 312.247 481.774 312.642 473.227 312.642Z"
      fill="#9AB9E5"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M352.358 382.028L341.861 379.007L353.573 332.283L341.948 329.37C344.413 326.074 345.887 322.117 346.1 317.716V317.715C346.17 316.265 346.56 314.929 347.214 313.749L370.11 320.336L368.392 326.31L352.358 382.028Z"
      fill="#90B0E1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M490.09 421.662L479.676 418.664L492.595 367.13L465.583 360.359L468.918 348.769L507.842 359.97L500.694 384.815L496.626 398.948L490.09 421.662Z"
      fill="#90B0E1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M421.224 401.845L411.154 398.948L410.768 398.836L423.084 349.707L396.031 342.925L400.052 328.953L438.975 340.153L426.125 384.815L422.059 398.948L421.224 401.845Z"
      fill="#90B0E1"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M505.062 334.182L477.706 326.31L430.213 312.642L415.476 308.402H416.543L440.128 314.314L441.506 308.815L451.288 311.629L454.809 312.642L502.302 326.31L503.574 326.675L505.062 334.182Z"
      fill="#9CBCE7"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M337.966 394.551L305.581 386.435L298.679 384.705L309.962 339.689L310.017 339.465H319.179C329.084 339.465 337.287 335.604 341.948 329.37L353.573 332.283L341.861 379.007L340.406 384.815L337.966 394.551Z"
      fill="#4261B6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M476.986 429.398L437.699 419.549L442.863 398.948L446.406 384.815L453.307 357.282L465.583 360.359L492.594 367.13L479.676 418.664L476.986 429.398Z"
      fill="#4261B6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M407.476 411.974L368.188 402.127L368.985 398.948L372.528 384.815L383.796 339.859L396.031 342.925L423.084 349.707L410.768 398.836L410.741 398.948L407.476 411.974Z"
      fill="#4261B6"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M489.265 311.722L476.017 308.402H485.798C487.21 308.402 488.611 308.583 489.968 308.921L489.265 311.722Z"
      fill="#B5D1F0"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M440.128 314.314L416.543 308.402H441.611L441.506 308.815L440.128 314.314Z"
      fill="#B5D1F0"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M496.546 343.363L428.509 326.31L373.988 312.642L370.364 311.734L370.001 311.644L357.104 308.41C357.277 308.405 357.451 308.402 357.626 308.402H385.046L401.966 312.642L456.489 326.31L498.2 336.764L496.546 343.363Z"
      fill="#B5D1F0"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M389.12 592.183C388.84 592.183 388.56 592.192 388.281 592.211L388.161 591.18C388.469 590.934 388.648 590.54 388.598 590.119C388.521 589.472 387.935 589.01 387.288 589.085C386.641 589.161 386.179 589.748 386.255 590.394C386.304 590.812 386.566 591.154 386.92 591.323L387.043 592.35C385.866 592.542 384.733 592.897 383.651 593.413L384.19 594.54C385.727 593.804 387.386 593.431 389.12 593.431C389.939 593.431 390.754 593.518 391.548 593.691L391.814 592.471C390.932 592.279 390.026 592.183 389.12 592.183Z"
      fill="#99B0BF"
    />
    <motion.path
      variants={path_variants}
      initial="hidden"
      animate="visible"
      d="M399.99 596.376C400.535 596.309 400.921 595.815 400.855 595.269C400.788 594.726 400.292 594.338 399.749 594.405C399.238 594.467 398.866 594.904 398.875 595.406L398.192 596.004C397.503 595.296 396.726 594.666 395.874 594.128L395.208 595.184C397.075 596.361 398.535 598.026 399.429 600L400.564 599.485C400.151 598.572 399.631 597.721 399.015 596.941L399.676 596.364L399.99 596.376Z"
      fill="#99B0BF"
    />
  </motion.svg>
);

export default LoginSvg;
