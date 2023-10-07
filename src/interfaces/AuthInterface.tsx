export default interface AuthInterface {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
}
