import Heading from "@components/heading/heading";
import Container from "@components/container/container";
import Spacing from "@components/spacing/spacing";
import P3In from "@icons/p3in/p3in";
import Link from "next/link";
import JoinForm from "@pages/join/join";

const Join = () => {
  return (
    <main className="h-screen w-screen ">
      <Container>
        <Spacing className="h-[11vh] justify-between">
          <Link href="/">
            <P3In />
          </Link>

          <Link
            href="/signin"
            className="rounded-full border-[1px] border-blue-400 p-3 px-10 font-[600] text-primary transition-opacity hover:opacity-75"
          >
            Sign In
          </Link>
        </Spacing>

        <Heading className="mt-6 text-5xl font-[300] text-stone-700">
          Join and get into our professional community!
        </Heading>

        <JoinForm />
      </Container>
    </main>
  );
};

export default Join;
