Let $\mathcal{G}$ be a generalized Cops and Robbers game. Define a non-decreasing sequence of relations from $\mathcal{P}_E$ to $\mathcal{P}_P$, indexed by natural
numbers, as follows:

1. $q_E \preceq_0 p_P$ if and only if $(p_P, q_E) \in \mathcal{F}$.
2. Suppose $\preceq_0, \preceq_1, \ldots \preceq_{i-1}$ have all been defined for some $i \geq 1$.  Define $q_E \preceq_i p_P$ if $(p_P, q_E) \in \mathcal{F}$, or if $((p_P, q_E), E) \in
    \mathcal{S}$,  and for every $x_E \in \mathcal{A}_E(p_P, q_E)$ either $(p_P, x_E) \in \mathcal{F}$ or there exists $w_P \in \mathcal{A}_P(p_P, x_E)$ such that  $x_E \preceq_j  w_P$ for some $j< i$.

If the game is not over, for every move that the Evader can make from this position, either the game ends or the Pursuer has a response that leads to a win after he has moved j more times.
