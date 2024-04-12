export interface Team{
    id: string;
    team: string;
}

export interface PostResponse extends Team{
    action: string
}

export interface PatchResponse extends PostResponse{
    newTeam: string;
}