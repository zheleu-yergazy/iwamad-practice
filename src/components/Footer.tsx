type FooterProps = {
  text: string;
};

function Footer({ text }: FooterProps) {
  return <footer>{text}</footer>;
}

export default Footer;