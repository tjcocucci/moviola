import Container from './Container';
import Link from 'next/link';

export default function Header() {
  return (
    <Container>
      <Link href="/">Discover</Link>
      <Link href="/list"> My List</Link>
    </Container>
  );
}
