const user = '1703651444307355';
const pass = 'f5b61325a4b60622bcb9d4d2242a8acd';
import { StatsDB } from '../src/index';

describe('Config', () => {
  const statsDB = new StatsDB(user, pass);
  describe('Get config object', () => {
    const data = statsDB.config();
    it('Gets data', () => {
      expect(data).not.toEqual(0);
      expect.objectContaining(data);
    });
  });
});

describe('Player', () => {
  const statsDB = new StatsDB(user, pass);
  describe('Get the player object by name', () => {
    it('Gets data with no platform', () => {
      const data = statsDB.getPlayer('Spoit.GODSENT');
      expect(data).not.toEqual(0);
      expect.objectContaining(data);
    });
    it('Gets data with with platform [PC]', () => {
      const data = statsDB.getPlayer('Spoit.GODSENT', 'pc');
      expect(data).not.toEqual(0);
      expect.objectContaining(data);
    });
    it('Gets data with with platform [PS]', () => {
      const data = statsDB.getPlayer('cheesepie37', 'ps');
      expect(data).not.toEqual(0);
      expect.objectContaining(data);
    });
    it('Gets data with with platform [XBOX]', () => {
      const data = statsDB.getPlayer('AjIvnn Yz', 'xbox');
      expect(data).not.toEqual(0);
      expect.objectContaining(data);
    });
  });

  describe('Get the player object by id', () => {
    it('Gets data with no platform', () => {
      const data = statsDB.getPlayerById(
        'ab1ff7ae-13e4-4a6a-9b03-317285f8057b'
      );
      expect(data).not.toEqual(0);
      expect.objectContaining(data);
    });
  });
});

describe('Leader Board', () => {
  const statsDB = new StatsDB(user, pass);
  describe('Get leader board object', () => {
    const data = statsDB.getLeaderBoard();
    it('Gets all leader board data', () => {
      expect(data).not.toEqual(0);
      expect.objectContaining(data);
    });
  });
});

describe('Search', () => {
  const statsDB = new StatsDB(user, pass);
  describe('Search to get a player', () => {
    const data = statsDB.search('Spoit.GODSENT');
    it('Gets data', () => {
      expect(data).not.toEqual(0);
      expect.objectContaining(data);
    });
  });
});
