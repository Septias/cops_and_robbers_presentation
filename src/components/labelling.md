Initially, the vertices $((p_P,q_E), X)$ with $(p_P, q_E) \in \mathcal{F}$ have $\mathrm{label}(S) = 0$, and all other vertices $X$ have  $\mathrm{label}(X) = \infty$.

1. If $X ∈ \mathcal S_P$, then set $label(X) = 1 + \min_{Y ∈ N^+(X)} label(Y )$.
2. If $X ∈ \mathcal S_E$, then set $label(X) = 1 + \max_{Y ∈ N^+(X)} label(Y)$.
