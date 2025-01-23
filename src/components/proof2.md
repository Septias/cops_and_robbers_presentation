- By definition of the increasing sequence of relations, if $x \preceq_i y$ and $x \not\preceq_{i-1} y$, then the Evader has a move to a position $z \in
\mathcal A_E(y, x)$ such that $$i-1 = \min_{w \in \mathcal{A}_P(z, x)} \{j: z \preceq_j w\}.$$
- Suppose the Pursuer chooses $p_P \in \mathcal{I}_P$, and the Evader subsequently chooses an allowed starting position $q_E \in \mathcal{I}_E(p_P)$
- If $q_E \preceq_i p_P$, then assuming optimal play, the process ends in $i$ more moves by the Pursuer
- If, on the other hand, $q_E \not\preceq_i p_P$, then assuming optimal play, the Pursuer will move to a position $w_P$ for which the value of $j$ such that $q_E \preceq_j w_P$ is minimized
- The process ends in $j+1$ more moves by the Pursuer
