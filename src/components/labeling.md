Initially, the vertices $((p_P,q_E), X)$ with $(p_P, q_E) \in \mathcal{F}$ have $\mathrm{label}(S) = 0$, and all other vertices $X$ have  $\mathrm{label}(X) = \infty$.

1. If $X ∈ \mathcal S_P$, then set $label(X) = 1 + \min_{Y ∈ N^+(X)} label(Y )$.
2. If $X ∈ \mathcal S_E$, then set $label(X) = 1 + \max_{Y ∈ N^+(X)} label(Y)$.


- The **intuition** behind the labels is that the Pursuer’s optimal strategy is to move so that the game _is over as quickly as possible_, and the Evader’s optimal strategy is to move so the game _lasts as long as possible_.
- It is straightforward to prove by induction that the final labels are the number of moves that the game will last from a given position, assuming both sides play optimally.
