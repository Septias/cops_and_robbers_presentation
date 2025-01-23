- **Intermediate Proof**: If it is the Evader's move and the state of the game is $(p_P, q_E)$ with $q_E \preceq_i p_P$, then the Pursuer wins after making $i$ more moves.
- This is clear when $i = 0$
- Assume the statement holds for all natural numbers $j$ with $0 \leq j \leq i-1$.
- By definition of the sequence of relations, since $q_P \preceq_i p_E$ and $q_P \not\preceq_{i-1} p_E$, the Evader has a move to a position $w_E \in \mathcal{A}_E(p_E, q_P)$ such that, for all positions $x_P \in \mathcal{A}(p_P, w_E)$ to which the Pursuer can subsequently move, $i-1 = \min \{j: w_E \preceq_j x_P\}$.
- Hence, by definition of $\preceq_i$, the statement holds for $i.$

