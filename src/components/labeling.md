1. If $X ∈ \mathcal S_P$, then set $label(X) = 1 + \min_{Y ∈ N^+(X)} label(Y )$.
2. If $X ∈ \mathcal S_E$, then set $label(X) = 1 + \max_{Y ∈ N^+(X)} label(Y)$.

- It is straightforward to prove by induction that the final labels are the number of moves that the game will last from a given position, assuming both sides play optimally.
