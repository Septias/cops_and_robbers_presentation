1. There are two players named the _Pursuer_ and the _Evader_.

2. There is perfect information.

3. There is a set $\mathcal{P}_P$  of _allowed positions for the Pursuer_ and a set $\mathcal{P}_E$ of _allowed positions for the Evader_. The set of _positions of the game_ is the subset $\mathcal{P} \subseteq \mathcal{P}_P \times \mathcal{P}_E$ of positions that can be achieved when moves are made according to the rules of the game.  Similarly, the set  of _states_ of the game is the subset of $\mathcal{S} \subseteq \mathcal{P} \times \{P, E\}$ such that $((p_P, q_E), X) \in \mathcal{S}$ if the position $(p_P, q_E)$, with $X$ next to move, can be achieved when moves are made according to the rules of the game.

4. For each state of the game and each player, there is a non-empty set of allowed moves. Each allowed move leaves the position of the other player unchanged.  We use $\mathcal{A}_P(p_P, q_E)$ to denote the set of _allowed moves for the Pursuer_ when the state of the game is  $((p_P, q_E), P)$, and $\mathcal{A}_E(p_P, q_E)$ to denote the set of _allowed moves for the Evader_ when the state of the game is  $((p_P, q_E), E)$.

5. There is a set $\mathcal{I} \subseteq \mathcal{P}_P \times \mathcal{P}_E$ of _allowed start positions_.  We define the set $\mathcal{I}_P = \{p_P: (p_P, q_E) \in \mathcal{I}\ \mathrm{for\ some}\ q_E \in \mathcal{P}_E\}$ and, for $p_P \in \mathcal{P}_P$, we define the set $\mathcal{I}_E(p_P) = \{q_E \in \mathcal{P}_E: (p_P, q_E) \in \mathcal{I}\}.$ The game $\mathcal{G}$ begins by the Pursuer choosing a position $p_P \in \mathcal{I}_P$, and then the Evader choosing a position $q_E \in \mathcal{I}_E(p_P)$. Subject to these conditions, the rules of the game specify how it starts.

6. After each player has chosen its initial position, the sides move alternately with the Pursuer moving first.  Each player, on its turn, must choose an allowed move given the current state of the game.

7. The rules of the game specify when the Pursuer has caught the Evader. That is, there is a subset $\mathcal{F}$ of _final positions_. The Pursuer wins $\mathcal{G}$ if, at any time-step, the current position of the game belongs to $\mathcal{F}$. The Evader wins if their current position never belongs to $\mathcal{F}$.
