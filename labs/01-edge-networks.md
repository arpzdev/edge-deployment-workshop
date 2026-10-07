# Lab 01 — See the edge with your own eyes (10 min)

### 1. Which data centre answers you?
Open in your browser: <https://www.cloudflare.com/cdn-cgi/trace>
Find the line `colo=` — that 3-letter airport code is the edge location serving you.
Compare with your neighbour (Wi-Fi vs. mobile data). Same? Different?

### 2. Ping a traditional single-origin server vs. an edge network
```bash
ping -c 4 1.1.1.1            # Windows: ping -n 4 1.1.1.1
ping -c 4 example.com
```
Write down the average ms. Which is lower? Why?

### 3. Trace the path
```bash
traceroute 1.1.1.1           # Windows: tracert 1.1.1.1
```
Count the hops. 🗳️ **Poll:** how many hops did you get?

### Think-pair-share (3 min)
> If your server lives in Virginia (USA) and your user is in Kathmandu, what is the *minimum* round-trip time allowed by the speed of light? (~12,000 km each way, light in fibre ≈ 200,000 km/s)
