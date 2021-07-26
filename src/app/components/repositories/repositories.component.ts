import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../services/profile.service";
import { Repo } from "src/app/models/repo";

@Component({
  selector: "app-repositories",
  templateUrl: "./repositories.component.html",
  styleUrls: ["./repositories.component.css"],
  providers: [ProfileService]
})
export class RepositoriesComponent implements OnInit {
  repo: Repo;

  constructor(
    private profileService: ProfileService,
    public repoService: ProfileService
  ) {}

  ngOnInit() {}
}
