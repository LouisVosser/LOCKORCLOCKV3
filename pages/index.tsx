import { Twitter, Send, ImagePlus, Gift, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-yellow-100 text-black min-h-screen font-sans">
      <div className="text-center py-10 px-4 border-b border-black">
        <h1 className="text-5xl font-extrabold tracking-tight">LOCK IN OR CLOCK IN</h1>
        <p className="mt-4 text-2xl italic">Make your choice: generational wealth or eternal 9-to-5.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-black text-yellow-100 px-6 py-3 rounded-xl text-lg">Buy Now</button>
          <button className="border border-black px-6 py-3 rounded-xl text-lg">View Chart</button>
        </div>
        <div className="mt-8">
          <Image src="/banner_ready.png" alt="Banner" width={1200} height={400} className="rounded-xl border mx-auto" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">About $LOCKORCLOCK</h2>
        <p className="text-lg leading-relaxed">
          $LOCKORCLOCK isn’t just a memecoin — it’s a warning. Lock in early or get cooked by the system.
          You're either stacking bags, or clocking shifts. This is your final stand against the 9-to-5 matrix. Choose wisely.
        </p>
      </div>

      <div className="bg-yellow-200 py-16 px-6 border-t border-b border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Live Chart</h2>
          <iframe src="https://dexscreener.com/solana/replace-with-your-token-address"
            width="100%" height="500" className="rounded-xl border border-black" allowFullScreen></iframe>
        </div>
      </div>

      <div className="bg-yellow-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Token Info</h2>
          <div className="grid grid-cols-2 gap-4 text-lg">
            <div><strong>Name:</strong> LockorClock</div>
            <div><strong>Symbol:</strong> $LOCKORCLOCK</div>
            <div><strong>Chain:</strong> Solana</div>
            <div><strong>Supply:</strong> 69,420,000,000</div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">Roadmap</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li><strong>Q1:</strong> Get cooked by fiat reality</li>
          <li><strong>Q2:</strong> Lock in the community</li>
          <li><strong>Q3:</strong> Meme domination, sticker drops</li>
          <li><strong>Q4:</strong> Full timeline takeover, Clockchain bridge</li>
        </ul>
      </div>

      <div className="bg-yellow-300 py-20 px-6 border-t border-b border-black text-center">
        <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-2">
          <Gift className="w-6 h-6" /> Claim Your Airdrop
        </h2>
        <input type="text" placeholder="Enter your wallet address"
          className="px-4 py-3 w-full max-w-md border border-black rounded-xl text-black" />
        <div className="mt-4">
          <button className="bg-black text-yellow-100 px-6 py-3 rounded-xl text-lg">Claim Now</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-6 flex gap-2 items-center">
          <ImagePlus className="w-6 h-6" /> Meme Gallery & Sticker Pack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Image src="/meme1.png" alt="Meme 1" width={400} height={400} className="rounded-xl border" />
          <Image src="/meme2.png" alt="Meme 2" width={400} height={400} className="rounded-xl border" />
          <Image src="/meme3.png" alt="Meme 3" width={400} height={400} className="rounded-xl border" />
        </div>
      </div>

      <div className="bg-yellow-100 py-16 px-6 border-t border-black text-center">
        <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
          <Star className="w-6 h-6" /> Get Whitelisted
        </h2>
        <input type="text" placeholder="Enter your Twitter @ or Email"
          className="px-4 py-3 w-full max-w-md border border-black rounded-xl text-black" />
        <div className="mt-4">
          <button className="bg-black text-yellow-100 px-6 py-3 rounded-xl text-lg">Submit</button>
        </div>
      </div>

      <div className="bg-black text-yellow-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <div className="flex justify-center gap-6">
          <button className="bg-yellow-100 text-black px-6 py-3 rounded-xl flex gap-2 items-center">
            <Twitter className="w-5 h-5" /> X / Twitter
          </button>
          <button className="bg-yellow-100 text-black px-6 py-3 rounded-xl flex gap-2 items-center">
            <Send className="w-5 h-5" /> Telegram
          </button>
        </div>
      </div>

      <footer className="text-center py-10 text-sm text-black bg-yellow-100">
        © 2025 $LOCKORCLOCK. Stay locked.
      </footer>
    </div>
  );
}
