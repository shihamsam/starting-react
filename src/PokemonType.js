import PropTypes from "prop-types";

const PokemonType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.shape({
    english: PropTypes.string,
  }),
  onSelect: PropTypes.func,
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
});

export default PokemonType;
