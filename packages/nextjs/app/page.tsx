"use client";

import Link from "next/link";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex flex-col items-center flex-grow pt-10">
        {/* Header */}
        <div className="px-5 text-center">
          <h1 className="text-2xl mb-2">Welcome to</h1>
          <h1 className="text-4xl font-bold">Scaffold-ETH 2</h1>

          {/* Connected Address Display */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-x-2 mt-4">
            <p className="font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

          {/* Instructions for editing files */}
          <p className="text-lg mt-4">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>
          </p>
        </div>

        {/* Custom Deployment Info */}
        <p className="text-lg mt-4 text-center">
          <strong className="text-4xl" style={{ color: "#04D1FF" }}>
            DEPLOY ON METIS
          </strong>
        </p>

        {/* Smart Contract Editing Info */}
        <p className="text-lg text-center mt-4">
          Edited smart contract{" "}
          <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
            SandabContract.sol
          </code>{" "}
          in{" "}
          <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
            packages/hardhat/contracts
          </code>{" "}
          by adding the{" "}
          <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
            storeNumber
          </code>{" "}
          function.
        </p>

        <p className="text-lg text-center mt-4">
          Edit your smart contract{" "}
          <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
            YourContract.sol
          </code>{" "}
          in{" "}
          <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
            packages/hardhat/contracts
          </code>
          .
        </p>

        {/* Features Section */}
        <div className="bg-base-300 w-full flex-grow mt-16 px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            {/* Debug Contracts */}
            <div className="flex flex-col items-center text-center bg-base-100 px-10 py-10 max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>

            {/* Block Explorer */}
            <div className="flex flex-col items-center text-center bg-base-100 px-10 py-10 max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
